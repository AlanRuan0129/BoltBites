import { RoomManager } from "../manager/RoomManager.js";

export function CreateRoomOn(socket) {
  socket.on("create-room", ({ name }, callback) => {
    let room = RoomManager.createRoom(socket, name);
    if (callback) {
      const roomStatus = room.toDto();
      callback(roomStatus);
    }
  });
}

export function JoinRoomOn(socket) {
  socket.on("join-room", ({ roomId, name }, callback) => {
    let room = RoomManager.joinRoom(socket, roomId, name);
    if (callback) {
      if (room) {
        const roomStatus = room.toDto();
        callback(roomStatus);
      } else {
        callback(null);
      }
    }
  });
}

export function StartGameOn(socket) {
  socket.on("start-game", ({ roomId }, callback) => {
    let isSuccess = RoomManager.startGame(roomId);
    if (callback) {
      callback(isSuccess);
    }
  });
}

export function PlayerReadyOn(socket) {
  socket.on("player-ready", ({ roomId, playerId, checkedColor }, callback) => {
    const isSuccess = RoomManager.playerReady(roomId, playerId, checkedColor);
    if (callback) {
      callback(isSuccess);
    }
  });
}

export function UpdateConfigOn(socket) {
  socket.on("update-config", ({ roomId, config }, callback) => {
    const isSuccess = RoomManager.updateConfig(roomId, config);
    if (callback) {
      callback(isSuccess);
    }
  });
}

export function PlayerUnReadyOn(socket) {
  socket.on("player-unready", ({ roomId, playerId }) => {
    RoomManager.playerUnReady(roomId, playerId);
  });
}

export function OnRoomInformationRequest(socket) {
  socket.on("room-information", ({ roomId }, callback) => {
    if (callback) {
      callback(RoomManager.getRoomInformation(roomId));
    }
  });
}
