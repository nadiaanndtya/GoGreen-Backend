const Notification = require("../models/Notification");

exports.getNotifications = async (req, res) => {

  try {

    const notifications =
      await Notification.findAll({

        where: {
          id_user: req.user.id
        },

        order: [
          ["created_at", "DESC"]
        ]

      });

    res.json(notifications);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getUnreadCount = async (req, res) => {

  try {

    const count =
      await Notification.count({

        where: {
          id_user: req.user.id,
          is_read: false
        }

      });

    res.json({
      count
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.readAllNotifications =
async (req, res) => {

  try {

    await Notification.update(
      {
        is_read: true
      },
      {
        where: {
          id_user: req.user.id,
          is_read: false
        }
      }
    );

    res.json({
      message: "Berhasil"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.readNotification = async (req, res) => {

  try {

    const { id } = req.params;

    const notification =
      await Notification.findOne({

        where: {
          id_notification: id,
          id_user: req.user.id
        }

      });

    if (!notification) {
      return res.status(404).json({
        message: "Notifikasi tidak ditemukan"
      });
    }

    await notification.update({
      is_read: true
    });

    res.json({
      message: "Notifikasi dibaca"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.deleteNotification =
async (req, res) => {

  try {

    const { id } = req.params;

    const deleted =
      await Notification.destroy({

        where: {
          id_notification: id,
          id_user: req.user.id
        }

      });

    if (!deleted) {
      return res.status(404).json({
        message: "Notifikasi tidak ditemukan"
      });
    }

    res.json({
      message: "Notifikasi berhasil dihapus"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};