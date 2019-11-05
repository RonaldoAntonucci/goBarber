import User from '../models/User';

export default async (req, res, next) => {
  const checkProvider = await User.findOne({
    where: { id: req.userId, provider: true },
  });

  if (!checkProvider) {
    return res.status(401).json({ error: 'User is not a provider.' });
  }

  return next();
};
