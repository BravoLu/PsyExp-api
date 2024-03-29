// source: user_info.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.grpc.bravo_studio.user_info_server.GenderType', null, global);
goog.exportSymbol('proto.grpc.bravo_studio.user_info_server.LoginReq', null, global);
goog.exportSymbol('proto.grpc.bravo_studio.user_info_server.LoginRsp', null, global);
goog.exportSymbol('proto.grpc.bravo_studio.user_info_server.RegisterReq', null, global);
goog.exportSymbol('proto.grpc.bravo_studio.user_info_server.RegisterRsp', null, global);
goog.exportSymbol('proto.grpc.bravo_studio.user_info_server.UserInfo', null, global);
goog.exportSymbol('proto.grpc.bravo_studio.user_info_server.UserType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.bravo_studio.user_info_server.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.bravo_studio.user_info_server.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.bravo_studio.user_info_server.UserInfo.displayName = 'proto.grpc.bravo_studio.user_info_server.UserInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.bravo_studio.user_info_server.RegisterReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.bravo_studio.user_info_server.RegisterReq.displayName = 'proto.grpc.bravo_studio.user_info_server.RegisterReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.bravo_studio.user_info_server.RegisterRsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.bravo_studio.user_info_server.RegisterRsp.displayName = 'proto.grpc.bravo_studio.user_info_server.RegisterRsp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.bravo_studio.user_info_server.LoginReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.bravo_studio.user_info_server.LoginReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.bravo_studio.user_info_server.LoginReq.displayName = 'proto.grpc.bravo_studio.user_info_server.LoginReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.bravo_studio.user_info_server.LoginRsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.grpc.bravo_studio.user_info_server.LoginRsp.displayName = 'proto.grpc.bravo_studio.user_info_server.LoginRsp';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.bravo_studio.user_info_server.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.bravo_studio.user_info_server.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 3, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 5, 0),
    userType: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.bravo_studio.user_info_server.UserInfo}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.bravo_studio.user_info_server.UserInfo;
  return proto.grpc.bravo_studio.user_info_server.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.bravo_studio.user_info_server.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.bravo_studio.user_info_server.UserInfo}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 5:
      var value = /** @type {!proto.grpc.bravo_studio.user_info_server.GenderType} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 6:
      var value = /** @type {!proto.grpc.bravo_studio.user_info_server.UserType} */ (reader.readEnum());
      msg.setUserType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.bravo_studio.user_info_server.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.bravo_studio.user_info_server.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getUserType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional int64 uid = 1;
 * @return {number}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc.bravo_studio.user_info_server.UserInfo} returns this
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.setUid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.UserInfo} returns this
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string phone_number = 3;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.UserInfo} returns this
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string user_name = 4;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.UserInfo} returns this
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional GenderType gender = 5;
 * @return {!proto.grpc.bravo_studio.user_info_server.GenderType}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.getGender = function() {
  return /** @type {!proto.grpc.bravo_studio.user_info_server.GenderType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.grpc.bravo_studio.user_info_server.GenderType} value
 * @return {!proto.grpc.bravo_studio.user_info_server.UserInfo} returns this
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional UserType user_type = 6;
 * @return {!proto.grpc.bravo_studio.user_info_server.UserType}
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.getUserType = function() {
  return /** @type {!proto.grpc.bravo_studio.user_info_server.UserType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.grpc.bravo_studio.user_info_server.UserType} value
 * @return {!proto.grpc.bravo_studio.user_info_server.UserInfo} returns this
 */
proto.grpc.bravo_studio.user_info_server.UserInfo.prototype.setUserType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.bravo_studio.user_info_server.RegisterReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.bravo_studio.user_info_server.RegisterReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    userInfo: (f = msg.getUserInfo()) && proto.grpc.bravo_studio.user_info_server.UserInfo.toObject(includeInstance, f),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterReq}
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.bravo_studio.user_info_server.RegisterReq;
  return proto.grpc.bravo_studio.user_info_server.RegisterReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.bravo_studio.user_info_server.RegisterReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterReq}
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpc.bravo_studio.user_info_server.UserInfo;
      reader.readMessage(value,proto.grpc.bravo_studio.user_info_server.UserInfo.deserializeBinaryFromReader);
      msg.setUserInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.bravo_studio.user_info_server.RegisterReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.bravo_studio.user_info_server.RegisterReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpc.bravo_studio.user_info_server.UserInfo.serializeBinaryToWriter
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional UserInfo user_info = 1;
 * @return {?proto.grpc.bravo_studio.user_info_server.UserInfo}
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.prototype.getUserInfo = function() {
  return /** @type{?proto.grpc.bravo_studio.user_info_server.UserInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpc.bravo_studio.user_info_server.UserInfo, 1));
};


/**
 * @param {?proto.grpc.bravo_studio.user_info_server.UserInfo|undefined} value
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterReq} returns this
*/
proto.grpc.bravo_studio.user_info_server.RegisterReq.prototype.setUserInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterReq} returns this
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.prototype.clearUserInfo = function() {
  return this.setUserInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.prototype.hasUserInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterReq} returns this
 */
proto.grpc.bravo_studio.user_info_server.RegisterReq.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.bravo_studio.user_info_server.RegisterRsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.bravo_studio.user_info_server.RegisterRsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uin: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterRsp}
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.bravo_studio.user_info_server.RegisterRsp;
  return proto.grpc.bravo_studio.user_info_server.RegisterRsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.bravo_studio.user_info_server.RegisterRsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterRsp}
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.bravo_studio.user_info_server.RegisterRsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.bravo_studio.user_info_server.RegisterRsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUin();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterRsp} returns this
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterRsp} returns this
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uin = 3;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.prototype.getUin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.RegisterRsp} returns this
 */
proto.grpc.bravo_studio.user_info_server.RegisterRsp.prototype.setUin = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.bravo_studio.user_info_server.LoginReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.bravo_studio.user_info_server.LoginReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    phoneNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginReq}
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.bravo_studio.user_info_server.LoginReq;
  return proto.grpc.bravo_studio.user_info_server.LoginReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.bravo_studio.user_info_server.LoginReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginReq}
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoneNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.bravo_studio.user_info_server.LoginReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.bravo_studio.user_info_server.LoginReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhoneNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginReq} returns this
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string phone_number = 2;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.prototype.getPhoneNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginReq} returns this
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.prototype.setPhoneNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginReq} returns this
 */
proto.grpc.bravo_studio.user_info_server.LoginReq.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.bravo_studio.user_info_server.LoginRsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.bravo_studio.user_info_server.LoginRsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userInfo: (f = msg.getUserInfo()) && proto.grpc.bravo_studio.user_info_server.UserInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginRsp}
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.bravo_studio.user_info_server.LoginRsp;
  return proto.grpc.bravo_studio.user_info_server.LoginRsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.bravo_studio.user_info_server.LoginRsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginRsp}
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = new proto.grpc.bravo_studio.user_info_server.UserInfo;
      reader.readMessage(value,proto.grpc.bravo_studio.user_info_server.UserInfo.deserializeBinaryFromReader);
      msg.setUserInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.bravo_studio.user_info_server.LoginRsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.bravo_studio.user_info_server.LoginRsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grpc.bravo_studio.user_info_server.UserInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginRsp} returns this
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginRsp} returns this
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional UserInfo user_info = 3;
 * @return {?proto.grpc.bravo_studio.user_info_server.UserInfo}
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.getUserInfo = function() {
  return /** @type{?proto.grpc.bravo_studio.user_info_server.UserInfo} */ (
    jspb.Message.getWrapperField(this, proto.grpc.bravo_studio.user_info_server.UserInfo, 3));
};


/**
 * @param {?proto.grpc.bravo_studio.user_info_server.UserInfo|undefined} value
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginRsp} returns this
*/
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.setUserInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.grpc.bravo_studio.user_info_server.LoginRsp} returns this
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.clearUserInfo = function() {
  return this.setUserInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.grpc.bravo_studio.user_info_server.LoginRsp.prototype.hasUserInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * @enum {number}
 */
proto.grpc.bravo_studio.user_info_server.UserType = {
  USER_TYPE_RESEARCHER: 0,
  USER_TYPE_PARTICIPANT: 1
};

/**
 * @enum {number}
 */
proto.grpc.bravo_studio.user_info_server.GenderType = {
  GENDER_TYPE_INVALID: 0,
  GENDER_TYPE_MAN: 1,
  GENDER_TYPE_WOMAN: 2
};

goog.object.extend(exports, proto.grpc.bravo_studio.user_info_server);
