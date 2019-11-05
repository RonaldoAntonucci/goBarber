import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const pageLimit = 20;

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(pageLimit);

    return res.json(notifications);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      {
        read: true,
      },
      { new: true }
    );

    res.json(notification);
  }
}

export default new NotificationController();
