const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/auth");

const notificationController =
require("../controllers/NotificationController");

router.get(
  "/notifications",
  verifyToken,
  notificationController.getNotifications
);

router.get(
  "/notifications/unread-count",
  verifyToken,
  notificationController.getUnreadCount
);

router.put(
  "/notifications/read-all",
  verifyToken,
  notificationController.readAllNotifications
);

router.put(
  "/notifications/read/:id",
  verifyToken,
  notificationController.readNotification
);

router.delete(
  "/notifications/:id",
  verifyToken,
  notificationController.deleteNotification
);

module.exports = router;