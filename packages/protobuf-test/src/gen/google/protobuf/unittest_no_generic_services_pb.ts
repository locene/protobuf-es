/* eslint-disable */
// @generated by protoc-gen-es v0.0.1-alpha.1 with parameter "ts_nocheck=false"
// @generated from file google/protobuf/unittest_no_generic_services.proto (package protobuf_unittest.no_generic_services_test, syntax proto2)
//
// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Author: kenton@google.com (Kenton Varda)

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_unittest.no_generic_services_test.TestEnum
 */
export enum TestEnum {
  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,
}

// Retrieve enum metadata with: proto2.getEnumType(TestEnum)
proto2.util.setEnumType(
  TestEnum,
  "protobuf_unittest.no_generic_services_test.TestEnum",
  [{ no: 1, name: "FOO" }]
);

/**
 * @generated from message protobuf_unittest.no_generic_services_test.TestMessage
 */
export class TestMessage extends Message<TestMessage> {
  /**
   * @generated from field: optional int32 a = 1;
   */
  a?: number;

  constructor(data?: PartialMessage<TestMessage>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime = proto2;
  static readonly typeName =
    "protobuf_unittest.no_generic_services_test.TestMessage";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    {
      no: 1,
      name: "a",
      kind: "scalar",
      T: 5 /* ScalarType.INT32 */,
      opt: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): TestMessage {
    return new TestMessage().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): TestMessage {
    return new TestMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): TestMessage {
    return new TestMessage().fromJsonString(jsonString, options);
  }

  static equals(
    a: TestMessage | PlainMessage<TestMessage> | undefined,
    b: TestMessage | PlainMessage<TestMessage> | undefined
  ): boolean {
    return proto2.util.equals(TestMessage, a, b);
  }
}
