// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_info_pb = require('./user_info_pb.js');

function serialize_grpc_bravo_studio_user_info_server_LoginReq(arg) {
  if (!(arg instanceof user_info_pb.LoginReq)) {
    throw new Error('Expected argument of type grpc.bravo_studio.user_info_server.LoginReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_bravo_studio_user_info_server_LoginReq(buffer_arg) {
  return user_info_pb.LoginReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_bravo_studio_user_info_server_LoginRsp(arg) {
  if (!(arg instanceof user_info_pb.LoginRsp)) {
    throw new Error('Expected argument of type grpc.bravo_studio.user_info_server.LoginRsp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_bravo_studio_user_info_server_LoginRsp(buffer_arg) {
  return user_info_pb.LoginRsp.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_bravo_studio_user_info_server_RegisterReq(arg) {
  if (!(arg instanceof user_info_pb.RegisterReq)) {
    throw new Error('Expected argument of type grpc.bravo_studio.user_info_server.RegisterReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_bravo_studio_user_info_server_RegisterReq(buffer_arg) {
  return user_info_pb.RegisterReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_bravo_studio_user_info_server_RegisterRsp(arg) {
  if (!(arg instanceof user_info_pb.RegisterRsp)) {
    throw new Error('Expected argument of type grpc.bravo_studio.user_info_server.RegisterRsp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_bravo_studio_user_info_server_RegisterRsp(buffer_arg) {
  return user_info_pb.RegisterRsp.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  // register a user
register: {
    path: '/grpc.bravo_studio.user_info_server.UserService/Register',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.RegisterReq,
    responseType: user_info_pb.RegisterRsp,
    requestSerialize: serialize_grpc_bravo_studio_user_info_server_RegisterReq,
    requestDeserialize: deserialize_grpc_bravo_studio_user_info_server_RegisterReq,
    responseSerialize: serialize_grpc_bravo_studio_user_info_server_RegisterRsp,
    responseDeserialize: deserialize_grpc_bravo_studio_user_info_server_RegisterRsp,
  },
  // login a user
login: {
    path: '/grpc.bravo_studio.user_info_server.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.LoginReq,
    responseType: user_info_pb.LoginRsp,
    requestSerialize: serialize_grpc_bravo_studio_user_info_server_LoginReq,
    requestDeserialize: deserialize_grpc_bravo_studio_user_info_server_LoginReq,
    responseSerialize: serialize_grpc_bravo_studio_user_info_server_LoginRsp,
    responseDeserialize: deserialize_grpc_bravo_studio_user_info_server_LoginRsp,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
