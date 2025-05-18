import User, { IUser } from '../models/user.model';

export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

export const createUser = async (userData: IUser): Promise<IUser> => {
  const user = new User(userData);
  return await user.save();
};
