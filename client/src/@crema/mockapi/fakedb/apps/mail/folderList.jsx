const folderList = [
  { id: 121, name: 'Inbox', alias: 'inbox', icon: 'envelope' },
  { id: 122, name: 'Sent', alias: 'sent', icon: 'user' },
  { id: 123, name: 'Draft', alias: 'draft', icon: 'envelope-open' },
  { id: 124, name: 'Starred', alias: 'starred', icon: 'star' },
  { id: 125, name: 'Spam', alias: 'spam', icon: 'question-circle' },
  { id: 126, name: 'Trash', alias: 'trash', icon: 'trash-alt' },
  { id: 127, name: 'Archive', alias: 'archive', icon: 'file-archive' },
];
export default folderList;

export const mailListMessages = (type, messages) => {
  switch (type) {
    case 125: {
      return messages['mail.sentToSpam'];
    }
    case 126: {
      return messages['mail.sentTrash'];
    }
    case 127: {
      return messages['mail.archived'];
    }
    default: {
      return messages['mail.updated'];
    }
  }
};
