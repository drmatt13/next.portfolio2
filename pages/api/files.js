import dbConnect from '../../libs/dbConntext'
import File from '../../models/File'
import axios from 'axios'

export default async function handler(req, res) {

  const { method } = req,
        { _id, name, folder_id, files, deleteAll } = req.body;

  await dbConnect()

  if (!global.mongoose.conn) {
    return res.status(500).json({
      error: 'Database connection error',
    })
  }

  // GET FILE
  if (method === 'GET') {
    try {
      const file = await File.findOne({ _id: req.query._id })
      return res.status(200).json({
        success: true,
        file,
      })
    } catch (error) {
      return res.status(200).json({
        success: false,
        error: error.message,
      })
    }
  }

  // CREATE NEW FILE
  if (method === 'POST') {
    try {
      const newFile = await File.create({ folder_id, name, Data: {} })
      if (newFile) {
        const patchReq = await axios(`http://localhost:3000/api/folders`, {
          method: 'PATCH',
          data: {
            _id: folder_id,
            files: [...files, newFile]
          }
        })
        if (patchReq.data.success) {
          return res.status(200).json({
            success: true,
            file: newFile,
          })
        }
      }
      return res.status(200).json({
        success: false
      })
    } catch (error) {
      return res.status(200).json({
        success: false,
        error: error.message,
      })
    }
  }

  // RENAME FILE
  if (method === 'PUT') {
    try {
      const file = await File.findOne({ _id });
      if (file) {
        file.name = name;
        await file.save();

        const patchReq = await axios(`http://localhost:3000/api/folders`, {
          method: 'PATCH',
          data: {
            _id: folder_id,
            files
          }
        })
        if (patchReq.data.success) {
          return res.status(200).json({
            success: true
          })
        }
      }
      return res.status(200).json({
        success: false
      })
    }
    catch (error) {
      return res.status(200).json({
        success: false,
        error: error.message,
      })
    }
  }

  // DELETE FILE
  if (method === 'DELETE') {
    try {
      // delete all files in folder
      if (deleteAll) {
        const deleteFolders = await File.deleteMany({ folder_id });
        if (deleteFolders) {
          return res.status(200).json({
            success: true,
            files: deleteFolders
          })
        }
        return res.status(200).json({
          success: false
        })
      }

      // delete one file
      const file = await File.findOne({ _id });
      if (file) {
        await file.remove();
        const deleteReq = await axios(`http://localhost:3000/api/folders`, {
          method: 'PATCH',
          data: {
            _id: folder_id,
            files: files.filter(file => file._id !== _id) // fix later
          }
        })
        if (deleteReq.data.success) {
          return res.status(200).json({
            success: true,
          })
        }
      }
      return res.status(200).json({
        success: false 
      })
    } catch (error) {
      return res.status(200).json({
        success: false,
        error: error.message,
      })
    }
  }

  res.status(201).json({ success: false })
}