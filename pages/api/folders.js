import dbConnect from '../../libs/dbConntext'
import Folder from '../../models/Folder'
import axios from 'axios'

export default async function handler(req, res) {

  const { method } = req,
        { _id, name, files } = req.body;

  await dbConnect()

  if (!global.mongoose.conn) {
    return res.status(500).json({
      error: 'Database connection error',
    })
  }

  // GET ALL FOLDERS WITH INITIAL HOOK
  if (method === 'GET') {
    try {
      const folders = await Folder.find().sort({ name: 1 });
      return res.status(200).json({
        folders,
      })
    } catch (error) {
      return res.status(200).json({
        error: error.message,
      })
    }
  }

  // CREATE NEW FOLDER
  if (method === 'POST') {
    try {
      const newFolder = await Folder.create({ name })
      return res.status(200).json({
        success: true,
        folder: newFolder,
      })
    } catch (error) {
      return res.status(200).json({
        success: false,
        error: error.message,
      })
    }
  }

  // RENAME FOLDER
  if (method === 'PUT') {
    try {
      const folder = await Folder.findOne({ _id });
      if (folder) {
        folder.name = name;
        await folder.save();
        return res.status(200).json({
          success: true,
          folder,
        })
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

  // EDIT FOLDER FILES
  if (method === 'PATCH') {
    try {
      const folder = await Folder.findOneAndUpdate({ _id },
        { $set: { 
          files: files.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))
          } 
        }, 
        { new: true }
      );
      if (folder) {
        return res.status(200).json({ success: true })
      }
      return res.status(200).json({ success: false })
    } catch (error) {
      return res.status(200).json({
        success: false,
        error: error.message,
      })
    }
  }

  // DELETE FOLDER
  if (method === 'DELETE') {
    try {
      const folder = await Folder.findOneAndDelete({ _id });
      if (folder) {
        const deleteReq = await axios(`http://localhost:3000/api/files`, {
          method: 'DELETE',
          data: {
            folder_id: _id,
            deleteAll: true,
          }
        })
        if (deleteReq.data.success) {
          return res.status(200).json({
            success: true,
            folder,
          })
        }
      }
      return res.status(200).json({
        success: false,
      })
    } catch (error) {
      return res.status(200).json({
        success: false,
        error: error.message,
      })
    }
  }

  res.status(201).json({ success: false, msg: 'Not implemented' })
}