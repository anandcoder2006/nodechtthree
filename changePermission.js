const { chmod } = require('fs/promises');
async function changePermission(filePath, permission) {
  try {
    await chmod(filePath, permission);
    console.log(`Changed permission to ${permission} for ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to change permission: ${error.message}`);
  }
}

changePermission('permission.txt', 0o400);

const { chown } = require('fs/promises');

async function changeOwnership(filePath, userId, groupId) {
  try {
    await chown(filePath, userId, groupId);
    console.log(`Changed ownership to ${userId}:${groupId} for ${filePath}`);
  } catch (error) {
    console.error(`Got an error trying to change ownership: ${error.message}`);
  }
}

changeOwnership('ownership.txt', 1000, 1010);