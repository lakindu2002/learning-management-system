import { Auth, Storage } from 'aws-amplify';
import { nanoid } from 'nanoid';

export const uploadFile = async (
  file: File,
  directory: string
): Promise<{ url: string; type: string }> => {
  const user = await Auth.currentUserPoolUser();
  const key =
    `${user.attributes.sub}/${directory || ''}${directory ? '/' : ''}` +
    `${nanoid(10)}.${file.name.split('.').pop()}`;
  const response = (await Storage.put(key, file, {
    contentType: file.type,
    customPrefix: {
      public: ''
    }
  })) as { key: string };
  return { url: `/uploads/${response.key}`, type: file.type };
};
