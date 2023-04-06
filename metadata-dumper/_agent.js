"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/decorator-cache-getter@1.0.0/node_modules/decorator-cache-getter/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/decorator-cache-getter@1.0.0/node_modules/decorator-cache-getter/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function cache(target, name, descriptor) {
        var getter = descriptor.get;
        if (!getter)
          throw new TypeError("Getter property descriptor expected");
        descriptor.get = function() {
          var value = getter.call(this);
          Object.defineProperty(this, name, {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            writable: false,
            value
          });
          return value;
        };
      }
      exports.cache = cache;
    }
  });

  // node_modules/.pnpm/versioning@1.1.2/node_modules/versioning/versioning.js
  var require_versioning = __commonJS({
    "node_modules/.pnpm/versioning@1.1.2/node_modules/versioning/versioning.js"(exports, module) {
      var delimiter = ".";
      var Version = function(version) {
        this._version = String(version);
      };
      function compare(v1, v2, complete) {
        v1 = String(v1);
        v2 = String(v2);
        if (v1 === v2) {
          return 0;
        }
        var v1s = v1.split(delimiter);
        var v2s = v2.split(delimiter);
        var len = Math[complete ? "max" : "min"](v1s.length, v2s.length);
        for (var i = 0; i < len; i++) {
          v1s[i] = "undefined" === typeof v1s[i] ? 0 : parseInt(v1s[i], 10);
          v2s[i] = "undefined" === typeof v2s[i] ? 0 : parseInt(v2s[i], 10);
          if (v1s[i] > v2s[i]) {
            return 1;
          }
          if (v1s[i] < v2s[i]) {
            return -1;
          }
        }
        return 0;
      }
      Version.compare = function(v1, v2) {
        return compare(v1, v2, true);
      };
      Version.eq = function(v1, v2, strict) {
        return compare(v1, v2, strict) === 0;
      };
      Version.gt = function(v1, v2) {
        return compare(v1, v2, true) > 0;
      };
      Version.gte = function(v1, v2) {
        return compare(v1, v2, true) >= 0;
      };
      Version.lt = function(v1, v2) {
        return compare(v1, v2, true) < 0;
      };
      Version.lte = function(v1, v2) {
        return compare(v1, v2, true) <= 0;
      };
      Version.prototype = {
        // new Version("6.1").eq(6); // true.
        // new Version("6.1.2").eq("6.1"); // true.
        eq: function(version) {
          return Version.eq(this._version, version);
        },
        gt: function(version) {
          return Version.gt(this._version, version);
        },
        gte: function(version) {
          return Version.gte(this._version, version);
        },
        lt: function(version) {
          return Version.lt(this._version, version);
        },
        lte: function(version) {
          return Version.lte(this._version, version);
        },
        valueOf: function() {
          return parseFloat(
            this._version.split(delimiter).slice(0, 2).join(delimiter),
            10
          );
        },
        /**
         * XXX: ""+ver 调用的转型方法是 valueOf，而不是 toString，这个有点悲剧。
         * 只能使用 String(ver) 或 ver.toString() 方法。
         * @param {Number} precision, 返回的版本号精度。默认返回完整版本号。
         * @return {String}
         */
        toString: function(precision) {
          return "undefined" === typeof precision ? this._version : this._version.split(delimiter).slice(0, precision).join(delimiter);
        }
      };
      module.exports = Version;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/utils/console.js
  var require_console = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/utils/console.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.inform = exports.ok = exports.warn = exports.raise = void 0;
      function raise(message) {
        throw `\x1B[0m\x1B[38;5;9mil2cpp\x1B[0m: ${message}`;
      }
      exports.raise = raise;
      function warn(message) {
        globalThis.console.log(`\x1B[38;5;11mil2cpp\x1B[0m: ${message}`);
      }
      exports.warn = warn;
      function ok(message) {
        globalThis.console.log(`\x1B[38;5;10mil2cpp\x1B[0m: ${message}`);
      }
      exports.ok = ok;
      function inform(message) {
        globalThis.console.log(`\x1B[38;5;12mil2cpp\x1B[0m: ${message}`);
      }
      exports.inform = inform;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/utils/native-wait.js
  var require_native_wait = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/utils/native-wait.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.forModule = void 0;
      var decorator_cache_getter_1 = require_dist();
      var versioning_1 = __importDefault(require_versioning());
      var Target = class {
        stringEncoding;
        address;
        constructor(responsible, name, stringEncoding) {
          this.stringEncoding = stringEncoding;
          this.address = Module.findExportByName(responsible, name) ?? NULL;
        }
        static get targets() {
          function info() {
            switch (Process.platform) {
              case "linux":
                try {
                  if (versioning_1.default.gte(Java.androidVersion, "12")) {
                    return [null, ["__loader_dlopen", "utf8"]];
                  } else {
                    return ["libdl.so", ["dlopen", "utf8"], ["android_dlopen_ext", "utf8"]];
                  }
                } catch (e) {
                  return [null, ["dlopen", "utf8"]];
                }
              case "darwin":
                return ["libdyld.dylib", ["dlopen", "utf8"]];
              case "windows":
                const ll = "LoadLibrary";
                return ["kernel32.dll", [`${ll}W`, "utf16"], [`${ll}ExW`, "utf16"], [`${ll}A`, "ansi"], [`${ll}ExA`, "ansi"]];
            }
          }
          const [responsible, ...targets] = info();
          return targets.map(([name, encoding]) => new Target(responsible, name, encoding)).filter((target) => !target.address.isNull());
        }
        readString(pointer) {
          switch (this.stringEncoding) {
            case "utf8":
              return pointer.readUtf8String();
            case "utf16":
              return pointer.readUtf16String();
            case "ansi":
              return pointer.readAnsiString();
          }
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Target, "targets", null);
      function forModule(...moduleNames) {
        return new Promise((resolve) => {
          for (const moduleName of moduleNames) {
            const module2 = Process.findModuleByName(moduleName);
            if (module2 != null) {
              resolve(moduleName);
              return;
            }
          }
          const interceptors = Target.targets.map((target) => Interceptor.attach(target.address, {
            onEnter(args) {
              this.modulePath = target.readString(args[0]) ?? "";
            },
            onLeave(returnValue) {
              if (returnValue.isNull())
                return;
              for (const moduleName of moduleNames) {
                if (!this.modulePath.endsWith(moduleName))
                  continue;
                setImmediate(() => interceptors.forEach((i) => i.detach()));
                resolve(moduleName);
              }
            }
          }));
        });
      }
      exports.forModule = forModule;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/base.js
  var require_base = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/base.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var versioning_1 = __importDefault(require_versioning());
      var console_1 = require_console();
      var native_wait_1 = require_native_wait();
      var Il2CppBase = class {
        constructor() {
        }
        /** @internal Gets the Il2Cpp module name. */
        static get moduleName() {
          switch (Process.platform) {
            case "linux":
              try {
                const _ = Java.androidVersion;
                return "libil2cpp.so";
              } catch (e) {
                return "GameAssembly.so";
              }
            case "windows":
              return "GameAssembly.dll";
            case "darwin":
              try {
                return "UnityFramework";
              } catch (e) {
                return "GameAssembly.dylib";
              }
          }
          (0, console_1.raise)(`${Process.platform} is not supported yet`);
        }
        /** */
        static get applicationDataPath() {
          const get_persistentDataPath = this.internalCall("UnityEngine.Application::get_persistentDataPath", "pointer", []);
          return new Il2Cpp.String(get_persistentDataPath()).content;
        }
        /** */
        static get applicationIdentifier() {
          const get_identifier = this.internalCall("UnityEngine.Application::get_identifier", "pointer", []) ?? this.internalCall("UnityEngine.Application::get_bundleIdentifier", "pointer", []);
          return get_identifier ? new Il2Cpp.String(get_identifier()).content : null;
        }
        /** Gets the version of the application */
        static get applicationVersion() {
          const get_version = this.internalCall("UnityEngine.Application::get_version", "pointer", []);
          return get_version ? new Il2Cpp.String(get_version()).content : null;
        }
        /** Gets the attached threads. */
        static get attachedThreads() {
          if (Il2Cpp.currentThread == null) {
            (0, console_1.raise)("only Il2Cpp threads can invoke Il2Cpp.attachedThreads");
          }
          const array = [];
          const sizePointer = Memory.alloc(Process.pointerSize);
          const startPointer = Il2Cpp.Api._threadGetAllAttachedThreads(sizePointer);
          const size = sizePointer.readInt();
          for (let i = 0; i < size; i++) {
            array.push(new Il2Cpp.Thread(startPointer.add(i * Process.pointerSize).readPointer()));
          }
          return array;
        }
        /** Gets the current attached thread, if any. */
        static get currentThread() {
          const handle = Il2Cpp.Api._threadCurrent();
          return handle.isNull() ? null : new Il2Cpp.Thread(handle);
        }
        /** Gets the Il2Cpp module as a Frida module. */
        static get module() {
          return Process.getModuleByName(this.moduleName);
        }
        /** Gets the Unity version of the current application. */
        static get unityVersion() {
          const get_unityVersion = this.internalCall("UnityEngine.Application::get_unityVersion", "pointer", []);
          if (get_unityVersion == null) {
            (0, console_1.raise)("couldn't determine the Unity version, please specify it manually");
          }
          return new Il2Cpp.String(get_unityVersion()).content;
        }
        /** @internal */
        static get unityVersionIsBelow201830() {
          return versioning_1.default.lt(this.unityVersion, "2018.3.0");
        }
        /** Allocates the given amount of bytes. */
        static alloc(size = Process.pointerSize) {
          return Il2Cpp.Api._alloc(size);
        }
        /** Dumps the application. */
        static dump(fileName, path) {
          fileName = fileName ?? `${Il2Cpp.applicationIdentifier ?? "unknown"}_${Il2Cpp.applicationVersion ?? "unknown"}.cs`;
          const destination = `${path ?? Il2Cpp.applicationDataPath}/${fileName}`;
          const file = new File(destination, "w");
          for (const assembly of Il2Cpp.Domain.assemblies) {
            (0, console_1.inform)(`dumping ${assembly.name}...`);
            for (const klass of assembly.image.classes) {
              file.write(`${klass}

`);
            }
          }
          file.flush();
          file.close();
          (0, console_1.ok)(`dump saved to ${destination}`);
        }
        /** Frees memory. */
        static free(pointer) {
          return Il2Cpp.Api._free(pointer);
        }
        /** @internal Waits for Unity and Il2Cpp native libraries to be loaded and initialized. */
        static async initialize() {
          if (Process.platform == "darwin") {
            let il2cppModuleName = Process.findModuleByAddress(Module.findExportByName(null, "il2cpp_init") ?? NULL)?.name;
            if (il2cppModuleName == void 0) {
              il2cppModuleName = await (0, native_wait_1.forModule)("UnityFramework", "GameAssembly.dylib");
            }
            Reflect.defineProperty(Il2Cpp, "moduleName", { value: il2cppModuleName });
          } else {
            await (0, native_wait_1.forModule)(this.moduleName);
          }
          if (Il2Cpp.Api._getCorlib().isNull()) {
            await new Promise((resolve) => {
              const interceptor = Interceptor.attach(Il2Cpp.Api._init, {
                onLeave() {
                  interceptor.detach();
                  setImmediate(resolve);
                }
              });
            });
          }
        }
        /** */
        static installExceptionListener(targetThread = "current") {
          const threadId = Process.getCurrentThreadId();
          return Interceptor.attach(Il2Cpp.module.getExportByName("__cxa_throw"), function(args) {
            if (targetThread == "current" && this.threadId != threadId) {
              return;
            }
            (0, console_1.inform)(new Il2Cpp.Object(args[0].readPointer()));
          });
        }
        /** */
        static internalCall(name, retType, argTypes) {
          const handle = Il2Cpp.Api._resolveInternalCall(Memory.allocUtf8String(name));
          return handle.isNull() ? null : new NativeFunction(handle, retType, argTypes);
        }
        /** Schedules a callback on the Il2Cpp initializer thread. */
        static scheduleOnInitializerThread(block) {
          return new Promise((resolve) => {
            const listener = Interceptor.attach(Il2Cpp.Api._threadCurrent, () => {
              const currentThreadId = Il2Cpp.currentThread?.id;
              if (currentThreadId != void 0 && currentThreadId == Il2Cpp.attachedThreads[0].id) {
                listener.detach();
                const result = block();
                setImmediate(() => resolve(result));
              }
            });
          });
        }
        /** Attaches the caller thread to Il2Cpp domain and executes the given block.  */
        static async perform(block) {
          await this.initialize();
          let thread = this.currentThread;
          const isForeignThread = thread == null;
          if (thread == null) {
            thread = Il2Cpp.Domain.attach();
          }
          try {
            const result = block();
            return result instanceof Promise ? await result : result;
          } catch (e) {
            globalThis.console.log(e);
            throw e;
          } finally {
            if (isForeignThread) {
              thread.detach();
            }
          }
        }
        /** Creates a new `Il2Cpp.Tracer` instance. */
        static trace() {
          return new Il2Cpp.Tracer();
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppBase, "applicationDataPath", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppBase, "applicationIdentifier", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppBase, "applicationVersion", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppBase, "module", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppBase, "unityVersion", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppBase, "unityVersionIsBelow201830", null);
      Reflect.set(globalThis, "Il2Cpp", Il2CppBase);
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/api.js
  var require_api = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/api.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var versioning_1 = __importDefault(require_versioning());
      var console_1 = require_console();
      var Il2CppApi = class {
        constructor() {
        }
        static get _alloc() {
          return this.r("il2cpp_alloc", "pointer", ["size_t"]);
        }
        static get _arrayGetElements() {
          return this.r("il2cpp_array_get_elements", "pointer", ["pointer"]);
        }
        static get _arrayGetLength() {
          return this.r("il2cpp_array_length", "uint32", ["pointer"]);
        }
        static get _arrayNew() {
          return this.r("il2cpp_array_new", "pointer", ["pointer", "uint32"]);
        }
        static get _assemblyGetImage() {
          return this.r("il2cpp_assembly_get_image", "pointer", ["pointer"]);
        }
        static get _classForEach() {
          return this.r("il2cpp_class_for_each", "void", ["pointer", "pointer"]);
        }
        static get _classFromName() {
          return this.r("il2cpp_class_from_name", "pointer", ["pointer", "pointer", "pointer"]);
        }
        static get _classFromSystemType() {
          return this.r("il2cpp_class_from_system_type", "pointer", ["pointer"]);
        }
        static get _classFromType() {
          return this.r("il2cpp_class_from_type", "pointer", ["pointer"]);
        }
        static get _classGetActualInstanceSize() {
          return this.r("il2cpp_class_get_actual_instance_size", "int32", ["pointer"]);
        }
        static get _classGetArrayClass() {
          return this.r("il2cpp_array_class_get", "pointer", ["pointer", "uint32"]);
        }
        static get _classGetArrayElementSize() {
          return this.r("il2cpp_class_array_element_size", "int", ["pointer"]);
        }
        static get _classGetAssemblyName() {
          return this.r("il2cpp_class_get_assemblyname", "pointer", ["pointer"]);
        }
        static get _classGetBaseType() {
          return this.r("il2cpp_class_enum_basetype", "pointer", ["pointer"]);
        }
        static get _classGetDeclaringType() {
          return this.r("il2cpp_class_get_declaring_type", "pointer", ["pointer"]);
        }
        static get _classGetElementClass() {
          return this.r("il2cpp_class_get_element_class", "pointer", ["pointer"]);
        }
        static get _classGetFieldFromName() {
          return this.r("il2cpp_class_get_field_from_name", "pointer", ["pointer", "pointer"]);
        }
        static get _classGetFields() {
          return this.r("il2cpp_class_get_fields", "pointer", ["pointer", "pointer"]);
        }
        static get _classGetFlags() {
          return this.r("il2cpp_class_get_flags", "int", ["pointer"]);
        }
        static get _classGetImage() {
          return this.r("il2cpp_class_get_image", "pointer", ["pointer"]);
        }
        static get _classGetInstanceSize() {
          return this.r("il2cpp_class_instance_size", "int32", ["pointer"]);
        }
        static get _classGetInterfaces() {
          return this.r("il2cpp_class_get_interfaces", "pointer", ["pointer", "pointer"]);
        }
        static get _classGetMethodFromName() {
          return this.r("il2cpp_class_get_method_from_name", "pointer", ["pointer", "pointer", "int"]);
        }
        static get _classGetMethods() {
          return this.r("il2cpp_class_get_methods", "pointer", ["pointer", "pointer"]);
        }
        static get _classGetName() {
          return this.r("il2cpp_class_get_name", "pointer", ["pointer"]);
        }
        static get _classGetNamespace() {
          return this.r("il2cpp_class_get_namespace", "pointer", ["pointer"]);
        }
        static get _classGetNestedClasses() {
          return this.r("il2cpp_class_get_nested_types", "pointer", ["pointer", "pointer"]);
        }
        static get _classGetParent() {
          return this.r("il2cpp_class_get_parent", "pointer", ["pointer"]);
        }
        static get _classGetRank() {
          return this.r("il2cpp_class_get_rank", "int", ["pointer"]);
        }
        static get _classGetStaticFieldData() {
          return this.r("il2cpp_class_get_static_field_data", "pointer", ["pointer"]);
        }
        static get _classGetValueSize() {
          return this.r("il2cpp_class_value_size", "int32", ["pointer", "pointer"]);
        }
        static get _classGetType() {
          return this.r("il2cpp_class_get_type", "pointer", ["pointer"]);
        }
        static get _classHasReferences() {
          return this.r("il2cpp_class_has_references", "bool", ["pointer"]);
        }
        static get _classInit() {
          return this.r("il2cpp_runtime_class_init", "void", ["pointer"]);
        }
        static get _classIsAbstract() {
          return this.r("il2cpp_class_is_abstract", "bool", ["pointer"]);
        }
        static get _classIsAssignableFrom() {
          return this.r("il2cpp_class_is_assignable_from", "bool", ["pointer", "pointer"]);
        }
        static get _classIsBlittable() {
          return this.r("il2cpp_class_is_blittable", "bool", ["pointer"]);
        }
        static get _classIsEnum() {
          return this.r("il2cpp_class_is_enum", "bool", ["pointer"]);
        }
        static get _classIsGeneric() {
          return this.r("il2cpp_class_is_generic", "bool", ["pointer"]);
        }
        static get _classIsInflated() {
          return this.r("il2cpp_class_is_inflated", "bool", ["pointer"]);
        }
        static get _classIsInterface() {
          return this.r("il2cpp_class_is_interface", "bool", ["pointer"]);
        }
        static get _classIsSubclassOf() {
          return this.r("il2cpp_class_is_subclass_of", "bool", ["pointer", "pointer", "bool"]);
        }
        static get _classIsValueType() {
          return this.r("il2cpp_class_is_valuetype", "bool", ["pointer"]);
        }
        static get _domainAssemblyOpen() {
          return this.r("il2cpp_domain_assembly_open", "pointer", ["pointer", "pointer"]);
        }
        static get _domainGet() {
          return this.r("il2cpp_domain_get", "pointer", []);
        }
        static get _domainGetAssemblies() {
          return this.r("il2cpp_domain_get_assemblies", "pointer", ["pointer", "pointer"]);
        }
        static get _fieldGetModifier() {
          return this.r("il2cpp_field_get_modifier", "pointer", ["pointer"]);
        }
        static get _fieldGetClass() {
          return this.r("il2cpp_field_get_parent", "pointer", ["pointer"]);
        }
        static get _fieldGetFlags() {
          return this.r("il2cpp_field_get_flags", "int", ["pointer"]);
        }
        static get _fieldGetName() {
          return this.r("il2cpp_field_get_name", "pointer", ["pointer"]);
        }
        static get _fieldGetOffset() {
          return this.r("il2cpp_field_get_offset", "int32", ["pointer"]);
        }
        static get _fieldGetStaticValue() {
          return this.r("il2cpp_field_static_get_value", "void", ["pointer", "pointer"]);
        }
        static get _fieldGetType() {
          return this.r("il2cpp_field_get_type", "pointer", ["pointer"]);
        }
        static get _fieldIsLiteral() {
          return this.r("il2cpp_field_is_literal", "bool", ["pointer"]);
        }
        static get _fieldIsStatic() {
          return this.r("il2cpp_field_is_static", "bool", ["pointer"]);
        }
        static get _fieldIsThreadStatic() {
          return this.r("il2cpp_field_is_thread_static", "bool", ["pointer"]);
        }
        static get _fieldSetStaticValue() {
          return this.r("il2cpp_field_static_set_value", "void", ["pointer", "pointer"]);
        }
        static get _free() {
          return this.r("il2cpp_free", "void", ["pointer"]);
        }
        static get _gcCollect() {
          return this.r("il2cpp_gc_collect", "void", ["int"]);
        }
        static get _gcCollectALittle() {
          return this.r("il2cpp_gc_collect_a_little", "void", []);
        }
        static get _gcDisable() {
          return this.r("il2cpp_gc_disable", "void", []);
        }
        static get _gcEnable() {
          return this.r("il2cpp_gc_enable", "void", []);
        }
        static get _gcGetHeapSize() {
          return this.r("il2cpp_gc_get_heap_size", "int64", []);
        }
        static get _gcGetMaxTimeSlice() {
          return this.r("il2cpp_gc_get_max_time_slice_ns", "int64", []);
        }
        static get _gcGetUsedSize() {
          return this.r("il2cpp_gc_get_used_size", "int64", []);
        }
        static get _gcHandleGetTarget() {
          return this.r("il2cpp_gchandle_get_target", "pointer", ["uint32"]);
        }
        static get _gcHandleFree() {
          return this.r("il2cpp_gchandle_free", "void", ["uint32"]);
        }
        static get _gcHandleNew() {
          return this.r("il2cpp_gchandle_new", "uint32", ["pointer", "bool"]);
        }
        static get _gcHandleNewWeakRef() {
          return this.r("il2cpp_gchandle_new_weakref", "uint32", ["pointer", "bool"]);
        }
        static get _gcIsDisabled() {
          return this.r("il2cpp_gc_is_disabled", "bool", []);
        }
        static get _gcIsIncremental() {
          return this.r("il2cpp_gc_is_incremental", "bool", []);
        }
        static get _gcSetMaxTimeSlice() {
          return this.r("il2cpp_gc_set_max_time_slice_ns", "void", ["int64"]);
        }
        static get _gcStartIncrementalCollection() {
          return this.r("il2cpp_gc_start_incremental_collection", "void", []);
        }
        static get _gcStartWorld() {
          return this.r("il2cpp_start_gc_world", "void", []);
        }
        static get _gcStopWorld() {
          return this.r("il2cpp_stop_gc_world", "void", []);
        }
        static get _getCorlib() {
          return this.r("il2cpp_get_corlib", "pointer", []);
        }
        static get _imageGetAssembly() {
          return this.r("il2cpp_image_get_assembly", "pointer", ["pointer"]);
        }
        static get _imageGetClass() {
          return this.r("il2cpp_image_get_class", "pointer", ["pointer", "uint"]);
        }
        static get _imageGetClassCount() {
          return this.r("il2cpp_image_get_class_count", "uint32", ["pointer"]);
        }
        static get _imageGetName() {
          return this.r("il2cpp_image_get_name", "pointer", ["pointer"]);
        }
        static get _init() {
          return this.r("il2cpp_init", "void", []);
        }
        static get _livenessAllocateStruct() {
          return this.r("il2cpp_unity_liveness_allocate_struct", "pointer", ["pointer", "int", "pointer", "pointer", "pointer"]);
        }
        static get _livenessCalculationBegin() {
          return this.r("il2cpp_unity_liveness_calculation_begin", "pointer", ["pointer", "int", "pointer", "pointer", "pointer", "pointer"]);
        }
        static get _livenessCalculationEnd() {
          return this.r("il2cpp_unity_liveness_calculation_end", "void", ["pointer"]);
        }
        static get _livenessCalculationFromStatics() {
          return this.r("il2cpp_unity_liveness_calculation_from_statics", "void", ["pointer"]);
        }
        static get _livenessFinalize() {
          return this.r("il2cpp_unity_liveness_finalize", "void", ["pointer"]);
        }
        static get _livenessFreeStruct() {
          return this.r("il2cpp_unity_liveness_free_struct", "void", ["pointer"]);
        }
        static get _memorySnapshotCapture() {
          return this.r("il2cpp_capture_memory_snapshot", "pointer", []);
        }
        static get _memorySnapshotFree() {
          return this.r("il2cpp_free_captured_memory_snapshot", "void", ["pointer"]);
        }
        static get _memorySnapshotGetClasses() {
          return this.r("il2cpp_memory_snapshot_get_classes", "pointer", ["pointer", "pointer"]);
        }
        static get _memorySnapshotGetGCHandles() {
          return this.r("il2cpp_memory_snapshot_get_gc_handles", ["uint32", "pointer"], ["pointer"]);
        }
        static get _memorySnapshotGetRuntimeInformation() {
          return this.r("il2cpp_memory_snapshot_get_information", ["uint32", "uint32", "uint32", "uint32", "uint32", "uint32"], ["pointer"]);
        }
        static get _methodGetModifier() {
          return this.r("il2cpp_method_get_modifier", "pointer", ["pointer"]);
        }
        static get _methodGetClass() {
          return this.r("il2cpp_method_get_class", "pointer", ["pointer"]);
        }
        static get _methodGetFlags() {
          return this.r("il2cpp_method_get_flags", "uint32", ["pointer", "pointer"]);
        }
        static get _methodGetFromReflection() {
          return this.r("il2cpp_method_get_from_reflection", "pointer", ["pointer"]);
        }
        static get _methodGetName() {
          return this.r("il2cpp_method_get_name", "pointer", ["pointer"]);
        }
        static get _methodGetObject() {
          return this.r("il2cpp_method_get_object", "pointer", ["pointer", "pointer"]);
        }
        static get _methodGetParameterCount() {
          return this.r("il2cpp_method_get_param_count", "uint8", ["pointer"]);
        }
        static get _methodGetParameterName() {
          return this.r("il2cpp_method_get_param_name", "pointer", ["pointer", "uint32"]);
        }
        static get _methodGetParameters() {
          return this.r("il2cpp_method_get_parameters", "pointer", ["pointer", "pointer"]);
        }
        static get _methodGetParameterType() {
          return this.r("il2cpp_method_get_param", "pointer", ["pointer", "uint32"]);
        }
        static get _methodGetPointer() {
          return this.r("il2cpp_method_get_pointer", "pointer", ["pointer"]);
        }
        static get _methodGetReturnType() {
          return this.r("il2cpp_method_get_return_type", "pointer", ["pointer"]);
        }
        static get _methodIsExternal() {
          return this.r("il2cpp_method_is_external", "bool", ["pointer"]);
        }
        static get _methodIsGeneric() {
          return this.r("il2cpp_method_is_generic", "bool", ["pointer"]);
        }
        static get _methodIsInflated() {
          return this.r("il2cpp_method_is_inflated", "bool", ["pointer"]);
        }
        static get _methodIsInstance() {
          return this.r("il2cpp_method_is_instance", "bool", ["pointer"]);
        }
        static get _methodIsSynchronized() {
          return this.r("il2cpp_method_is_synchronized", "bool", ["pointer"]);
        }
        static get _monitorEnter() {
          return this.r("il2cpp_monitor_enter", "void", ["pointer"]);
        }
        static get _monitorExit() {
          return this.r("il2cpp_monitor_exit", "void", ["pointer"]);
        }
        static get _monitorPulse() {
          return this.r("il2cpp_monitor_pulse", "void", ["pointer"]);
        }
        static get _monitorPulseAll() {
          return this.r("il2cpp_monitor_pulse_all", "void", ["pointer"]);
        }
        static get _monitorTryEnter() {
          return this.r("il2cpp_monitor_try_enter", "bool", ["pointer", "uint32"]);
        }
        static get _monitorTryWait() {
          return this.r("il2cpp_monitor_try_wait", "bool", ["pointer", "uint32"]);
        }
        static get _monitorWait() {
          return this.r("il2cpp_monitor_wait", "void", ["pointer"]);
        }
        static get _objectGetClass() {
          return this.r("il2cpp_object_get_class", "pointer", ["pointer"]);
        }
        static get _objectGetVirtualMethod() {
          return this.r("il2cpp_object_get_virtual_method", "pointer", ["pointer", "pointer"]);
        }
        static get _objectInit() {
          return this.r("il2cpp_runtime_object_init_exception", "void", ["pointer", "pointer"]);
        }
        static get _objectNew() {
          return this.r("il2cpp_object_new", "pointer", ["pointer"]);
        }
        static get _objectGetSize() {
          return this.r("il2cpp_object_get_size", "uint32", ["pointer"]);
        }
        static get _objectUnbox() {
          return this.r("il2cpp_object_unbox", "pointer", ["pointer"]);
        }
        static get _resolveInternalCall() {
          return this.r("il2cpp_resolve_icall", "pointer", ["pointer"]);
        }
        static get _stringChars() {
          return this.r("il2cpp_string_chars", "pointer", ["pointer"]);
        }
        static get _stringLength() {
          return this.r("il2cpp_string_length", "int32", ["pointer"]);
        }
        static get _stringNew() {
          return this.r("il2cpp_string_new", "pointer", ["pointer"]);
        }
        static get _stringSetLength() {
          return this.r("il2cpp_string_set_length", "void", ["pointer", "int32"]);
        }
        static get _valueBox() {
          return this.r("il2cpp_value_box", "pointer", ["pointer", "pointer"]);
        }
        static get _threadAttach() {
          return this.r("il2cpp_thread_attach", "pointer", ["pointer"]);
        }
        static get _threadCurrent() {
          return this.r("il2cpp_thread_current", "pointer", []);
        }
        static get _threadGetAllAttachedThreads() {
          return this.r("il2cpp_thread_get_all_attached_threads", "pointer", ["pointer"]);
        }
        static get _threadIsVm() {
          return this.r("il2cpp_is_vm_thread", "bool", ["pointer"]);
        }
        static get _threadDetach() {
          return this.r("il2cpp_thread_detach", "void", ["pointer"]);
        }
        static get _typeGetName() {
          return this.r("il2cpp_type_get_name", "pointer", ["pointer"]);
        }
        static get _typeGetObject() {
          return this.r("il2cpp_type_get_object", "pointer", ["pointer"]);
        }
        static get _typeGetTypeEnum() {
          return this.r("il2cpp_type_get_type", "int", ["pointer"]);
        }
        static get _typeIsByReference() {
          return this.r("il2cpp_type_is_byref", "bool", ["pointer"]);
        }
        static get _typeIsPrimitive() {
          return this.r("il2cpp_type_is_primitive", "bool", ["pointer"]);
        }
        /** @internal */
        static get cModule() {
          if (versioning_1.default.lt(Il2Cpp.unityVersion, "5.3.0") || versioning_1.default.gte(Il2Cpp.unityVersion, "2022.2.0")) {
            (0, console_1.warn)(`current Unity version ${Il2Cpp.unityVersion} is not supported, expect breakage`);
          }
          const offsetsFinderCModule = new CModule(`#include <stdint.h>

#define OFFSET_OF(name, type)     int16_t name (char * p,                  type e)    {        for (int16_t i = 0; i < 512; i++) if (* ((type *) p + i) == e) return i;        return -1;    }

OFFSET_OF (offset_of_int32, int32_t)
OFFSET_OF (offset_of_pointer, void *)
            `);
          const offsetOfInt32 = new NativeFunction(offsetsFinderCModule.offset_of_int32, "int16", ["pointer", "int32"]);
          const offsetOfPointer = new NativeFunction(offsetsFinderCModule.offset_of_pointer, "int16", ["pointer", "pointer"]);
          const SystemString = Il2Cpp.Image.corlib.class("System.String");
          const SystemDateTime = Il2Cpp.Image.corlib.class("System.DateTime");
          const SystemReflectionModule = Il2Cpp.Image.corlib.class("System.Reflection.Module");
          SystemDateTime.initialize();
          SystemReflectionModule.initialize();
          const DaysToMonth365 = (SystemDateTime.tryField("daysmonth") ?? SystemDateTime.tryField("DaysToMonth365") ?? SystemDateTime.field("s_daysToMonth365")).value;
          const FilterTypeName = SystemReflectionModule.field("FilterTypeName").value;
          const FilterTypeNameMethodPointer = FilterTypeName.field("method_ptr").value;
          const FilterTypeNameMethod = FilterTypeName.field("method").value;
          const source = `#include <stdint.h>
#include <string.h>


typedef struct _Il2CppObject Il2CppObject;
typedef enum _Il2CppTypeEnum Il2CppTypeEnum;
typedef struct _Il2CppReflectionMethod Il2CppReflectionMethod;
typedef struct _Il2CppManagedMemorySnapshot Il2CppManagedMemorySnapshot;
typedef struct _Il2CppMetadataType Il2CppMetadataType;


struct _Il2CppObject
{
    void * class;
    void * monitor;
};

enum _Il2CppTypeEnum
{
    IL2CPP_TYPE_END = 0x00,
    IL2CPP_TYPE_VOID = 0x01,
    IL2CPP_TYPE_BOOLEAN = 0x02,
    IL2CPP_TYPE_CHAR = 0x03,
    IL2CPP_TYPE_I1 = 0x04,
    IL2CPP_TYPE_U1 = 0x05,
    IL2CPP_TYPE_I2 = 0x06,
    IL2CPP_TYPE_U2 = 0x07,
    IL2CPP_TYPE_I4 = 0x08,
    IL2CPP_TYPE_U4 = 0x09,
    IL2CPP_TYPE_I8 = 0x0a,
    IL2CPP_TYPE_U8 = 0x0b,
    IL2CPP_TYPE_R4 = 0x0c,
    IL2CPP_TYPE_R8 = 0x0d,
    IL2CPP_TYPE_STRING = 0x0e,
    IL2CPP_TYPE_PTR = 0x0f,
    IL2CPP_TYPE_BYREF = 0x10,
    IL2CPP_TYPE_VALUETYPE = 0x11,
    IL2CPP_TYPE_CLASS = 0x12,
    IL2CPP_TYPE_VAR = 0x13,
    IL2CPP_TYPE_ARRAY = 0x14,
    IL2CPP_TYPE_GENERICINST = 0x15,
    IL2CPP_TYPE_TYPEDBYREF = 0x16,
    IL2CPP_TYPE_I = 0x18,
    IL2CPP_TYPE_U = 0x19,
    IL2CPP_TYPE_FNPTR = 0x1b,
    IL2CPP_TYPE_OBJECT = 0x1c,
    IL2CPP_TYPE_SZARRAY = 0x1d,
    IL2CPP_TYPE_MVAR = 0x1e,
    IL2CPP_TYPE_CMOD_REQD = 0x1f,
    IL2CPP_TYPE_CMOD_OPT = 0x20,
    IL2CPP_TYPE_INTERNAL = 0x21,
    IL2CPP_TYPE_MODIFIER = 0x40,
    IL2CPP_TYPE_SENTINEL = 0x41,
    IL2CPP_TYPE_PINNED = 0x45,
    IL2CPP_TYPE_ENUM = 0x55
};

struct _Il2CppReflectionMethod
{
    Il2CppObject object;
    void * method;
    void * name;
    void * reftype;
};

struct _Il2CppManagedMemorySnapshot
{
    struct Il2CppManagedHeap
    {
        uint32_t section_count;
        void * sections;
    } heap;
    struct Il2CppStacks
    {
        uint32_t stack_count;
        void * stacks;
    } stacks;
    struct Il2CppMetadataSnapshot
    {
        uint32_t type_count;
        Il2CppMetadataType * types;
    } metadata_snapshot;
    struct Il2CppGCHandles
    {
        uint32_t tracked_object_count;
        Il2CppObject ** pointers_to_objects;
    } gc_handles;
    struct Il2CppRuntimeInformation
    {
        uint32_t pointer_size;
        uint32_t object_header_size;
        uint32_t array_header_size;
        uint32_t array_bounds_offset_in_header;
        uint32_t array_size_offset_in_header;
        uint32_t allocation_granularity;
    } runtime_information;
    void * additional_user_information;
};

struct _Il2CppMetadataType
{
    uint32_t flags;
    void * fields;
    uint32_t field_count;
    uint32_t statics_size;
    uint8_t * statics;
    uint32_t base_or_element_type_index;
    char * name;
    const char * assembly_name;
    uint64_t type_info_address;
    uint32_t size;
};


#define THREAD_STATIC_FIELD_OFFSET -1;

#define FIELD_ATTRIBUTE_FIELD_ACCESS_MASK 0x0007
#define FIELD_ATTRIBUTE_COMPILER_CONTROLLED 0x0000
#define FIELD_ATTRIBUTE_PRIVATE 0x0001
#define FIELD_ATTRIBUTE_FAM_AND_ASSEM 0x0002
#define FIELD_ATTRIBUTE_ASSEMBLY 0x0003
#define FIELD_ATTRIBUTE_FAMILY 0x0004
#define FIELD_ATTRIBUTE_FAM_OR_ASSEM 0x0005
#define FIELD_ATTRIBUTE_PUBLIC 0x0006

#define FIELD_ATTRIBUTE_STATIC 0x0010
#define FIELD_ATTRIBUTE_LITERAL 0x0040

#define METHOD_ATTRIBUTE_MEMBER_ACCESS_MASK 0x0007
#define METHOD_ATTRIBUTE_COMPILER_CONTROLLED 0x0000
#define METHOD_ATTRIBUTE_PRIVATE 0x0001
#define METHOD_ATTRIBUTE_FAM_AND_ASSEM 0x0002
#define METHOD_ATTRIBUTE_ASSEMBLY 0x0003
#define METHOD_ATTRIBUTE_FAMILY 0x0004
#define METHOD_ATTRIBUTE_FAM_OR_ASSEM 0x0005
#define METHOD_ATTRIBUTE_PUBLIC 0x0006

#define METHOD_ATTRIBUTE_STATIC 0x0010
#define METHOD_IMPL_ATTRIBUTE_INTERNAL_CALL 0x1000
#define METHOD_IMPL_ATTRIBUTE_SYNCHRONIZED 0x0020


static const char * (*il2cpp_class_get_name) (void *) = (void *) ${this._classGetName};
static int (*il2cpp_field_get_flags) (void *) = (void *) ${this._fieldGetFlags};
static size_t (*il2cpp_field_get_offset) (void *) = (void *) ${this._fieldGetOffset};
static uint32_t (*il2cpp_method_get_flags) (void *, uint32_t *) = (void *) ${this._methodGetFlags};
static char * (*il2cpp_type_get_name) (void *) = (void *) ${this._typeGetName};
static Il2CppTypeEnum (*il2cpp_type_get_type_enum) (void *) = (void *) ${this._typeGetTypeEnum};
static void (*il2cpp_free) (void * pointer) = (void *) ${this._free};


void
il2cpp_string_set_length (int32_t * string,
                          int32_t length)
{
    *(string + ${offsetOfInt32(Il2Cpp.String.from("vfsfitvnm"), 9)}) = length;
}

void *
il2cpp_array_get_elements (int32_t * array)
{ 
    return array + ${offsetOfInt32(DaysToMonth365, 31) - 1};
}

uint8_t
il2cpp_type_is_byref (void * type)
{   
    char * name;
    char last_char;

    name = il2cpp_type_get_name (type);
    last_char = name[strlen (name) - 1];

    il2cpp_free (name);
    return last_char == '&';
}

uint8_t
il2cpp_type_is_primitive (void * type)
{
    Il2CppTypeEnum type_enum;

    type_enum = il2cpp_type_get_type_enum (type);

    return ((type_enum >= IL2CPP_TYPE_BOOLEAN && 
        type_enum <= IL2CPP_TYPE_R8) || 
        type_enum == IL2CPP_TYPE_I || 
        type_enum == IL2CPP_TYPE_U
    );
}

int32_t
il2cpp_class_get_actual_instance_size (int32_t * class)
{
    return *(class + ${offsetOfInt32(SystemString, SystemString.instanceSize - 2)});
}

uint8_t
il2cpp_class_get_rank (void * class)
{
    uint8_t rank;
    const char * name;
    
    rank = 0;
    name = il2cpp_class_get_name (class);

    for (uint16_t i = strlen (name) - 1; i > 0; i--)
    {
        char c = name[i];

        if (c == ']') rank++;
        else if (c == '[' || rank == 0) break;
        else if (c == ',') rank++;
        else break;
    }

    return rank;
}

const char *
il2cpp_field_get_modifier (void * field)
{   
    int flags;

    flags = il2cpp_field_get_flags (field);

    switch (flags & FIELD_ATTRIBUTE_FIELD_ACCESS_MASK) {
        case FIELD_ATTRIBUTE_PRIVATE:
            return "private";
        case FIELD_ATTRIBUTE_FAM_AND_ASSEM:
            return "private protected";
        case FIELD_ATTRIBUTE_ASSEMBLY:
            return "internal";
        case FIELD_ATTRIBUTE_FAMILY:
            return "protected";
        case FIELD_ATTRIBUTE_FAM_OR_ASSEM:
            return "protected internal";
        case FIELD_ATTRIBUTE_PUBLIC:
            return "public";
    }

    return "";
}

uint8_t
il2cpp_field_is_literal (void * field)
{
    return (il2cpp_field_get_flags (field) & FIELD_ATTRIBUTE_LITERAL) != 0;
}

uint8_t
il2cpp_field_is_static (void * field)
{
    return (il2cpp_field_get_flags (field) & FIELD_ATTRIBUTE_STATIC) != 0;
}

uint8_t
il2cpp_field_is_thread_static (void * field)
{
    return il2cpp_field_get_offset (field) == THREAD_STATIC_FIELD_OFFSET;
}

const char *
il2cpp_method_get_modifier (void * method)
{
    uint32_t flags;

    flags = il2cpp_method_get_flags (method, NULL);

    switch (flags & METHOD_ATTRIBUTE_MEMBER_ACCESS_MASK) {
        case METHOD_ATTRIBUTE_PRIVATE:
            return "private";
        case METHOD_ATTRIBUTE_FAM_AND_ASSEM:
            return "private protected";
        case METHOD_ATTRIBUTE_ASSEMBLY:
            return "internal";
        case METHOD_ATTRIBUTE_FAMILY:
            return "protected";
        case METHOD_ATTRIBUTE_FAM_OR_ASSEM:
            return "protected internal";
        case METHOD_ATTRIBUTE_PUBLIC:
            return "public";
    }

    return "";
}

void *
il2cpp_method_get_from_reflection (const Il2CppReflectionMethod * method)
{
    return method->method;
}

void *
il2cpp_method_get_pointer (void ** method)
{
    return * (method + ${offsetOfPointer(FilterTypeNameMethod, FilterTypeNameMethodPointer)});
}

uint8_t
il2cpp_method_is_external (void * method)
{
    uint32_t implementation_flags;

    il2cpp_method_get_flags (method, &implementation_flags);

    return (implementation_flags & METHOD_IMPL_ATTRIBUTE_INTERNAL_CALL) != 0;
}

uint8_t
il2cpp_method_is_synchronized (void * method)
{
    uint32_t implementation_flags;

    il2cpp_method_get_flags (method, &implementation_flags);

    return (implementation_flags & METHOD_IMPL_ATTRIBUTE_SYNCHRONIZED) != 0;
}

uintptr_t
il2cpp_memory_snapshot_get_classes (const Il2CppManagedMemorySnapshot * snapshot,
                                    Il2CppMetadataType ** iter)
{
    const int zero;
    const void * null;

    if (iter != NULL && snapshot->metadata_snapshot.type_count > zero)
    {
        if (*iter == null)
        {
            *iter = snapshot->metadata_snapshot.types;
            return (uintptr_t) (*iter)->type_info_address;
        }
        else
        {
            Il2CppMetadataType * metadata_type = *iter + 1;

            if (metadata_type < snapshot->metadata_snapshot.types + snapshot->metadata_snapshot.type_count)
            {
                *iter = metadata_type;
                return (uintptr_t) (*iter)->type_info_address;
            }
        }
    }
    return 0;
}

struct Il2CppGCHandles
il2cpp_memory_snapshot_get_gc_handles (const Il2CppManagedMemorySnapshot * snapshot)
{
    return snapshot->gc_handles;
}

struct Il2CppRuntimeInformation
il2cpp_memory_snapshot_get_information (const Il2CppManagedMemorySnapshot * snapshot)
{
    return snapshot->runtime_information;
}
        `;
          offsetsFinderCModule.dispose();
          return new CModule(source);
        }
        /** @internal */
        static r(exportName, retType, argTypes) {
          const exportPointer = Il2Cpp.module.findExportByName(exportName) ?? this.cModule[exportName];
          if (exportPointer == null) {
            (0, console_1.raise)(`cannot resolve export ${exportName}`);
          }
          return new NativeFunction(exportPointer, retType, argTypes);
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_alloc", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_arrayGetElements", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_arrayGetLength", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_arrayNew", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_assemblyGetImage", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classForEach", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classFromName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classFromSystemType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classFromType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetActualInstanceSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetArrayClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetArrayElementSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetAssemblyName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetBaseType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetDeclaringType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetElementClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetFieldFromName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetFields", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetFlags", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetImage", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetInstanceSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetInterfaces", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetMethodFromName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetMethods", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetNamespace", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetNestedClasses", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetParent", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetRank", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetStaticFieldData", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetValueSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classGetType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classHasReferences", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classInit", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsAbstract", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsAssignableFrom", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsBlittable", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsEnum", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsGeneric", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsInflated", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsInterface", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsSubclassOf", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_classIsValueType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_domainAssemblyOpen", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_domainGet", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_domainGetAssemblies", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldGetModifier", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldGetClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldGetFlags", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldGetName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldGetOffset", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldGetStaticValue", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldGetType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldIsLiteral", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldIsStatic", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldIsThreadStatic", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_fieldSetStaticValue", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_free", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcCollect", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcCollectALittle", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcDisable", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcEnable", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcGetHeapSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcGetMaxTimeSlice", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcGetUsedSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcHandleGetTarget", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcHandleFree", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcHandleNew", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcHandleNewWeakRef", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcIsDisabled", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcIsIncremental", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcSetMaxTimeSlice", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcStartIncrementalCollection", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcStartWorld", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_gcStopWorld", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_getCorlib", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_imageGetAssembly", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_imageGetClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_imageGetClassCount", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_imageGetName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_init", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_livenessAllocateStruct", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_livenessCalculationBegin", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_livenessCalculationEnd", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_livenessCalculationFromStatics", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_livenessFinalize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_livenessFreeStruct", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_memorySnapshotCapture", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_memorySnapshotFree", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_memorySnapshotGetClasses", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_memorySnapshotGetGCHandles", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_memorySnapshotGetRuntimeInformation", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetModifier", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetFlags", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetFromReflection", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetObject", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetParameterCount", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetParameterName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetParameters", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetParameterType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetPointer", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodGetReturnType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodIsExternal", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodIsGeneric", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodIsInflated", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodIsInstance", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_methodIsSynchronized", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_monitorEnter", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_monitorExit", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_monitorPulse", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_monitorPulseAll", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_monitorTryEnter", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_monitorTryWait", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_monitorWait", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_objectGetClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_objectGetVirtualMethod", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_objectInit", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_objectNew", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_objectGetSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_objectUnbox", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_resolveInternalCall", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_stringChars", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_stringLength", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_stringNew", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_stringSetLength", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_valueBox", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_threadAttach", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_threadCurrent", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_threadGetAllAttachedThreads", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_threadIsVm", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_threadDetach", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_typeGetName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_typeGetObject", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_typeGetTypeEnum", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_typeIsByReference", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "_typeIsPrimitive", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppApi, "cModule", null);
      Il2Cpp.Api = Il2CppApi;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/filtering.js
  var require_filtering = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/filtering.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Il2CppFiltering = class {
        constructor() {
        }
        /** Creates a filter which includes `element`s whose type can be assigned to `klass` variables. */
        static Is(klass) {
          return (element) => {
            if (element instanceof Il2Cpp.Class) {
              return klass.isAssignableFrom(element);
            } else {
              return klass.isAssignableFrom(element.class);
            }
          };
        }
        /** Creates a filter which includes `element`s whose type corresponds to `klass` type. */
        static IsExactly(klass) {
          return (element) => {
            if (element instanceof Il2Cpp.Class) {
              return element.equals(klass);
            } else {
              return element.class.equals(klass);
            }
          };
        }
      };
      Il2Cpp.Filtering = Il2CppFiltering;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/runtime.js
  var require_runtime = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/runtime.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var Il2CppRuntime = class {
        constructor() {
        }
        /** Gets the allocation granularity. */
        static get allocationGranularity() {
          return this.information[5];
        }
        /** Gets the size of the Il2CppArray struct. */
        static get arrayHeaderSize() {
          return this.information[2];
        }
        /** @internal */
        static get information() {
          const snapshot = Il2Cpp.MemorySnapshot.capture();
          try {
            return Il2Cpp.Api._memorySnapshotGetRuntimeInformation(snapshot);
          } finally {
            Il2Cpp.Api._memorySnapshotFree(snapshot);
          }
        }
        /** Gets the pointer size. */
        static get pointerSize() {
          return this.information[0];
        }
        /** Gets the size of the Il2CppObject struct. */
        static get objectHeaderSize() {
          return this.information[1];
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppRuntime, "information", null);
      Il2Cpp.Runtime = Il2CppRuntime;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/utils/native-struct.js
  var require_native_struct = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/utils/native-struct.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.NonNullNativeStruct = exports.NativeStruct = void 0;
      var NativeStruct = class {
        handle;
        constructor(handleOrWrapper) {
          if (handleOrWrapper instanceof NativePointer) {
            this.handle = handleOrWrapper;
          } else {
            this.handle = handleOrWrapper.handle;
          }
        }
        equals(other) {
          return this.handle.equals(other.handle);
        }
        isNull() {
          return this.handle.isNull();
        }
      };
      exports.NativeStruct = NativeStruct;
      var NonNullNativeStruct = class extends NativeStruct {
        constructor(handle) {
          super(handle);
          if (handle.isNull()) {
            throw new Error(`Handle for "${this.constructor.name}" cannot be NULL.`);
          }
        }
      };
      exports.NonNullNativeStruct = NonNullNativeStruct;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/utils.js
  var require_utils = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toFridaValue = exports.fromFridaValue = exports.write = exports.read = void 0;
      var console_1 = require_console();
      var native_struct_1 = require_native_struct();
      function read(pointer, type) {
        switch (type.typeEnum) {
          case 2:
            return !!pointer.readS8();
          case 4:
            return pointer.readS8();
          case 5:
            return pointer.readU8();
          case 6:
            return pointer.readS16();
          case 7:
            return pointer.readU16();
          case 8:
            return pointer.readS32();
          case 9:
            return pointer.readU32();
          case 3:
            return pointer.readU16();
          case 10:
            return pointer.readS64();
          case 11:
            return pointer.readU64();
          case 12:
            return pointer.readFloat();
          case 13:
            return pointer.readDouble();
          case 24:
          case 25:
            return pointer.readPointer();
          case 15:
            return new Il2Cpp.Pointer(pointer.readPointer(), type.class.baseType);
          case 17:
            return new Il2Cpp.ValueType(pointer, type);
          case 28:
          case 18:
            return new Il2Cpp.Object(pointer.readPointer());
          case 21:
            return type.class.isValueType ? new Il2Cpp.ValueType(pointer, type) : new Il2Cpp.Object(pointer.readPointer());
          case 14:
            return new Il2Cpp.String(pointer.readPointer());
          case 29:
          case 20:
            return new Il2Cpp.Array(pointer.readPointer());
        }
        (0, console_1.raise)(`read: "${type.name}" (${type.typeEnum}) has not been handled yet. Please file an issue!`);
      }
      exports.read = read;
      function write(pointer, value, type) {
        switch (type.typeEnum) {
          case 2:
            return pointer.writeS8(+value);
          case 4:
            return pointer.writeS8(value);
          case 5:
            return pointer.writeU8(value);
          case 6:
            return pointer.writeS16(value);
          case 7:
            return pointer.writeU16(value);
          case 8:
            return pointer.writeS32(value);
          case 9:
            return pointer.writeU32(value);
          case 3:
            return pointer.writeU16(value);
          case 10:
            return pointer.writeS64(value);
          case 11:
            return pointer.writeU64(value);
          case 12:
            return pointer.writeFloat(value);
          case 13:
            return pointer.writeDouble(value);
          case 24:
          case 25:
          case 15:
          case 17:
          case 14:
          case 28:
          case 18:
          case 29:
          case 20:
          case 21:
            if (value instanceof Il2Cpp.ValueType) {
              Memory.copy(pointer, value.handle, type.class.valueSize);
              return pointer;
            }
            return pointer.writePointer(value);
        }
        (0, console_1.raise)(`write: "${type.name}" (${type.typeEnum}) has not been handled yet. Please file an issue!`);
      }
      exports.write = write;
      function fromFridaValue(value, type) {
        if (Array.isArray(value)) {
          return arrayToValueType(type, value);
        } else if (value instanceof NativePointer) {
          if (type.isByReference) {
            return new Il2Cpp.Reference(value, type);
          }
          switch (type.typeEnum) {
            case 15:
              return new Il2Cpp.Pointer(value, type.class.baseType);
            case 14:
              return new Il2Cpp.String(value);
            case 18:
            case 21:
            case 28:
              return new Il2Cpp.Object(value);
            case 29:
            case 20:
              return new Il2Cpp.Array(value);
            default:
              return value;
          }
        } else if (type.typeEnum == 2) {
          return !!value;
        } else {
          return value;
        }
      }
      exports.fromFridaValue = fromFridaValue;
      function toFridaValue(value) {
        if (typeof value == "boolean") {
          return +value;
        } else if (value instanceof Il2Cpp.ValueType) {
          return valueTypeToArray(value);
        } else {
          return value;
        }
      }
      exports.toFridaValue = toFridaValue;
      function valueTypeToArray(value) {
        const instanceFields = value.type.class.fields.filter((f) => !f.isStatic);
        return instanceFields.length == 0 ? [value.handle.readU8()] : instanceFields.map((field) => field.withHolder(value).value).map((value2) => value2 instanceof Il2Cpp.ValueType ? valueTypeToArray(value2) : value2 instanceof native_struct_1.NativeStruct ? value2.handle : typeof value2 == "boolean" ? +value2 : value2);
      }
      function arrayToValueType(type, nativeValues) {
        function iter(type2, startOffset = 0) {
          const arr = [];
          for (const field of type2.class.fields) {
            if (!field.isStatic) {
              const offset = startOffset + field.offset - Il2Cpp.Runtime.objectHeaderSize;
              if (field.type.typeEnum == 17 || field.type.typeEnum == 21 && field.type.class.isValueType) {
                arr.push(...iter(field.type, offset));
              } else {
                arr.push([field.type.typeEnum, offset]);
              }
            }
          }
          if (arr.length == 0) {
            arr.push([5, 0]);
          }
          return arr;
        }
        const valueType = Memory.alloc(type.class.valueSize);
        nativeValues = nativeValues.flat(Infinity);
        const typesAndOffsets = iter(type);
        for (let i = 0; i < nativeValues.length; i++) {
          const value = nativeValues[i];
          const [typeEnum, offset] = typesAndOffsets[i];
          const pointer = valueType.add(offset);
          switch (typeEnum) {
            case 2:
              pointer.writeS8(value);
              break;
            case 4:
              pointer.writeS8(value);
              break;
            case 5:
              pointer.writeU8(value);
              break;
            case 6:
              pointer.writeS16(value);
              break;
            case 7:
              pointer.writeU16(value);
              break;
            case 8:
              pointer.writeS32(value);
              break;
            case 9:
              pointer.writeU32(value);
              break;
            case 3:
              pointer.writeU16(value);
              break;
            case 10:
              pointer.writeS64(value);
              break;
            case 11:
              pointer.writeU64(value);
              break;
            case 12:
              pointer.writeFloat(value);
              break;
            case 13:
              pointer.writeDouble(value);
              break;
            case 24:
            case 25:
            case 15:
            case 29:
            case 20:
            case 14:
            case 28:
            case 18:
            case 21:
              pointer.writePointer(value);
              break;
            default:
              (0, console_1.warn)(`arrayToValueType: defaulting ${typeEnum} to pointer`);
              pointer.writePointer(value);
              break;
          }
        }
        return new Il2Cpp.ValueType(valueType, type);
      }
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/tracer.js
  var require_tracer = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/tracer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var console_1 = require_console();
      var utils_1 = require_utils();
      var Il2CppTracer = class {
        /** @internal */
        targets = [];
        /** @internal */
        #assemblies;
        /** @internal */
        #classes;
        /** @internal */
        #methods;
        /** @internal */
        #assemblyFilter;
        /** @internal */
        #classFilter;
        /** @internal */
        #methodFilter;
        /** @internal */
        #parameterFilter;
        domain() {
          return this;
        }
        assemblies(...assemblies) {
          this.#assemblies = assemblies;
          return this;
        }
        classes(...classes) {
          this.#classes = classes;
          return this;
        }
        methods(...methods) {
          this.#methods = methods;
          return this;
        }
        filterAssemblies(filter) {
          this.#assemblyFilter = filter;
          return this;
        }
        filterClasses(filter) {
          this.#classFilter = filter;
          return this;
        }
        filterMethods(filter) {
          this.#methodFilter = filter;
          return this;
        }
        filterParameters(filter) {
          this.#parameterFilter = filter;
          return this;
        }
        and() {
          const filterMethod = (method) => {
            if (this.#parameterFilter == void 0) {
              this.targets.push(method);
              return;
            }
            for (const parameter of method.parameters) {
              if (this.#parameterFilter(parameter)) {
                this.targets.push(method);
                break;
              }
            }
          };
          const filterMethods = (values) => {
            for (const method of values) {
              filterMethod(method);
            }
          };
          const filterClass = (klass) => {
            if (this.#methodFilter == void 0) {
              filterMethods(klass.methods);
              return;
            }
            for (const method of klass.methods) {
              if (this.#methodFilter(method)) {
                filterMethod(method);
              }
            }
          };
          const filterClasses = (values) => {
            for (const klass of values) {
              filterClass(klass);
            }
          };
          const filterAssembly = (assembly) => {
            if (this.#classFilter == void 0) {
              filterClasses(assembly.image.classes);
              return;
            }
            for (const klass of assembly.image.classes) {
              if (this.#classFilter(klass)) {
                filterClass(klass);
              }
            }
          };
          const filterAssemblies = (assemblies) => {
            for (const assembly of assemblies) {
              filterAssembly(assembly);
            }
          };
          const filterDomain = (domain) => {
            if (this.#assemblyFilter == void 0) {
              filterAssemblies(domain.assemblies);
              return;
            }
            for (const assembly of domain.assemblies) {
              if (this.#assemblyFilter(assembly)) {
                filterAssembly(assembly);
              }
            }
          };
          this.#methods ? filterMethods(this.#methods) : this.#classes ? filterClasses(this.#classes) : this.#assemblies ? filterAssemblies(this.#assemblies) : filterDomain(Il2Cpp.Domain);
          this.#assemblies = void 0;
          this.#classes = void 0;
          this.#methods = void 0;
          this.#assemblyFilter = void 0;
          this.#classFilter = void 0;
          this.#methodFilter = void 0;
          this.#parameterFilter = void 0;
          return this;
        }
        attach(mode = "full") {
          let count = 0;
          for (const target of this.targets) {
            if (target.virtualAddress.isNull()) {
              continue;
            }
            const offset = `\x1B[2m0x${target.relativeVirtualAddress.toString(16).padStart(8, `0`)}\x1B[0m`;
            const fullName = `${target.class.type.name}.\x1B[1m${target.name}\x1B[0m`;
            if (mode == "detailed") {
              const startIndex = +!target.isStatic | +Il2Cpp.unityVersionIsBelow201830;
              const callback = (...args) => {
                const thisParameter = target.isStatic ? void 0 : new Il2Cpp.Parameter("this", -1, target.class.type);
                const parameters = thisParameter ? [thisParameter].concat(target.parameters) : target.parameters;
                (0, console_1.inform)(`${offset} ${`\u2502 `.repeat(count++)}\u250C\u2500\x1B[35m${fullName}\x1B[0m(${parameters.map((e) => `\x1B[32m${e.name}\x1B[0m = \x1B[31m${(0, utils_1.fromFridaValue)(args[e.position + startIndex], e.type)}\x1B[0m`).join(`, `)});`);
                const returnValue = target.nativeFunction(...args);
                (0, console_1.inform)(`${offset} ${`\u2502 `.repeat(--count)}\u2514\u2500\x1B[33m${fullName}\x1B[0m${returnValue == void 0 ? `` : ` = \x1B[36m${(0, utils_1.fromFridaValue)(returnValue, target.returnType)}`}\x1B[0m;`);
                return returnValue;
              };
              try {
                target.revert();
                const nativeCallback = new NativeCallback(callback, target.returnType.fridaAlias, target.fridaSignature);
                Interceptor.replace(target.virtualAddress, nativeCallback);
              } catch (e) {
              }
            } else {
              try {
                Interceptor.attach(target.virtualAddress, {
                  onEnter: () => (0, console_1.inform)(`${offset} ${`\u2502 `.repeat(count++)}\u250C\u2500\x1B[35m${fullName}\x1B[0m`),
                  onLeave: () => (0, console_1.inform)(`${offset} ${`\u2502 `.repeat(--count)}\u2514\u2500\x1B[33m${fullName}\x1B[0m${count == 0 ? `
` : ``}`)
                });
              } catch (e) {
              }
            }
          }
        }
      };
      Il2Cpp.Tracer = Il2CppTracer;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/array.js
  var require_array = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/array.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var console_1 = require_console();
      var native_struct_1 = require_native_struct();
      var Il2CppArray = class extends native_struct_1.NativeStruct {
        /** @internal */
        static from(klass, lengthOrElements) {
          const length = typeof lengthOrElements == "number" ? lengthOrElements : lengthOrElements.length;
          const array = new Il2Cpp.Array(Il2Cpp.Api._arrayNew(klass, length));
          if (Array.isArray(lengthOrElements)) {
            array.elements.write(lengthOrElements);
          }
          return array;
        }
        /** @internal Gets a pointer to the first element of the current array. */
        get elements() {
          return new Il2Cpp.Pointer(Il2Cpp.Api._arrayGetElements(this), this.elementType);
        }
        /** Gets the size of the object encompassed by the current array. */
        get elementSize() {
          return this.elementType.class.arrayElementSize;
        }
        /** Gets the type of the object encompassed by the current array. */
        get elementType() {
          return this.object.class.type.class.baseType;
        }
        /** Gets the total number of elements in all the dimensions of the current array. */
        get length() {
          return Il2Cpp.Api._arrayGetLength(this);
        }
        /** Gets the encompassing object of the current array. */
        get object() {
          return new Il2Cpp.Object(this);
        }
        /** Gets the element at the specified index of the current array. */
        get(index) {
          if (index < 0 || index >= this.length) {
            (0, console_1.raise)(`cannot get element at index ${index}: array length is ${this.length}`);
          }
          return this.elements.get(index);
        }
        /** Sets the element at the specified index of the current array. */
        set(index, value) {
          if (index < 0 || index >= this.length) {
            (0, console_1.raise)(`cannot get element at index ${index}: array length is ${this.length}`);
          }
          this.elements.set(index, value);
        }
        /** */
        toString() {
          return this.isNull() ? "null" : `[${this.elements.read(this.length, 0)}]`;
        }
        /** Iterable. */
        *[Symbol.iterator]() {
          for (let i = 0; i < this.length; i++) {
            yield this.elements.get(i);
          }
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppArray.prototype, "elements", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppArray.prototype, "elementSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppArray.prototype, "elementType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppArray.prototype, "length", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppArray.prototype, "object", null);
      Il2Cpp.Array = Il2CppArray;
    }
  });

  // node_modules/.pnpm/fastest-levenshtein@1.0.16/node_modules/fastest-levenshtein/mod.js
  var require_mod = __commonJS({
    "node_modules/.pnpm/fastest-levenshtein@1.0.16/node_modules/fastest-levenshtein/mod.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.distance = exports.closest = void 0;
      var peq = new Uint32Array(65536);
      var myers_32 = function(a, b) {
        var n = a.length;
        var m = b.length;
        var lst = 1 << n - 1;
        var pv = -1;
        var mv = 0;
        var sc = n;
        var i = n;
        while (i--) {
          peq[a.charCodeAt(i)] |= 1 << i;
        }
        for (i = 0; i < m; i++) {
          var eq = peq[b.charCodeAt(i)];
          var xv = eq | mv;
          eq |= (eq & pv) + pv ^ pv;
          mv |= ~(eq | pv);
          pv &= eq;
          if (mv & lst) {
            sc++;
          }
          if (pv & lst) {
            sc--;
          }
          mv = mv << 1 | 1;
          pv = pv << 1 | ~(xv | mv);
          mv &= xv;
        }
        i = n;
        while (i--) {
          peq[a.charCodeAt(i)] = 0;
        }
        return sc;
      };
      var myers_x = function(b, a) {
        var n = a.length;
        var m = b.length;
        var mhc = [];
        var phc = [];
        var hsize = Math.ceil(n / 32);
        var vsize = Math.ceil(m / 32);
        for (var i = 0; i < hsize; i++) {
          phc[i] = -1;
          mhc[i] = 0;
        }
        var j = 0;
        for (; j < vsize - 1; j++) {
          var mv_1 = 0;
          var pv_1 = -1;
          var start_1 = j * 32;
          var vlen_1 = Math.min(32, m) + start_1;
          for (var k = start_1; k < vlen_1; k++) {
            peq[b.charCodeAt(k)] |= 1 << k;
          }
          for (var i = 0; i < n; i++) {
            var eq = peq[a.charCodeAt(i)];
            var pb = phc[i / 32 | 0] >>> i & 1;
            var mb = mhc[i / 32 | 0] >>> i & 1;
            var xv = eq | mv_1;
            var xh = ((eq | mb) & pv_1) + pv_1 ^ pv_1 | eq | mb;
            var ph = mv_1 | ~(xh | pv_1);
            var mh = pv_1 & xh;
            if (ph >>> 31 ^ pb) {
              phc[i / 32 | 0] ^= 1 << i;
            }
            if (mh >>> 31 ^ mb) {
              mhc[i / 32 | 0] ^= 1 << i;
            }
            ph = ph << 1 | pb;
            mh = mh << 1 | mb;
            pv_1 = mh | ~(xv | ph);
            mv_1 = ph & xv;
          }
          for (var k = start_1; k < vlen_1; k++) {
            peq[b.charCodeAt(k)] = 0;
          }
        }
        var mv = 0;
        var pv = -1;
        var start = j * 32;
        var vlen = Math.min(32, m - start) + start;
        for (var k = start; k < vlen; k++) {
          peq[b.charCodeAt(k)] |= 1 << k;
        }
        var score = m;
        for (var i = 0; i < n; i++) {
          var eq = peq[a.charCodeAt(i)];
          var pb = phc[i / 32 | 0] >>> i & 1;
          var mb = mhc[i / 32 | 0] >>> i & 1;
          var xv = eq | mv;
          var xh = ((eq | mb) & pv) + pv ^ pv | eq | mb;
          var ph = mv | ~(xh | pv);
          var mh = pv & xh;
          score += ph >>> m - 1 & 1;
          score -= mh >>> m - 1 & 1;
          if (ph >>> 31 ^ pb) {
            phc[i / 32 | 0] ^= 1 << i;
          }
          if (mh >>> 31 ^ mb) {
            mhc[i / 32 | 0] ^= 1 << i;
          }
          ph = ph << 1 | pb;
          mh = mh << 1 | mb;
          pv = mh | ~(xv | ph);
          mv = ph & xv;
        }
        for (var k = start; k < vlen; k++) {
          peq[b.charCodeAt(k)] = 0;
        }
        return score;
      };
      var distance = function(a, b) {
        if (a.length < b.length) {
          var tmp = b;
          b = a;
          a = tmp;
        }
        if (b.length === 0) {
          return a.length;
        }
        if (a.length <= 32) {
          return myers_32(a, b);
        }
        return myers_x(a, b);
      };
      exports.distance = distance;
      var closest = function(str, arr) {
        var min_distance = Infinity;
        var min_index = 0;
        for (var i = 0; i < arr.length; i++) {
          var dist = distance(str, arr[i]);
          if (dist < min_distance) {
            min_distance = dist;
            min_index = i;
          }
        }
        return arr[min_index];
      };
      exports.closest = closest;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/utils/utils.js
  var require_utils2 = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/utils/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.levenshtein = exports.cacheInstances = exports.nativeIterator = void 0;
      var fastest_levenshtein_1 = require_mod();
      var console_1 = require_console();
      function* nativeIterator(holder, nativeFunction, Class) {
        const iterator = Memory.alloc(Process.pointerSize);
        let handle;
        while (!(handle = nativeFunction(holder, iterator)).isNull()) {
          yield new Class(handle);
        }
      }
      exports.nativeIterator = nativeIterator;
      function cacheInstances(Class) {
        const instanceCache = /* @__PURE__ */ new Map();
        return new Proxy(Class, {
          construct(Target, argArray) {
            const handle = argArray[0].toUInt32();
            if (!instanceCache.has(handle)) {
              instanceCache.set(handle, new Target(argArray[0]));
            }
            return instanceCache.get(handle);
          }
        });
      }
      exports.cacheInstances = cacheInstances;
      function levenshtein(candidatesKey, nameGetter = (e) => e.name) {
        return function(_, propertyKey, descriptor) {
          const original = descriptor.value;
          descriptor.value = function(key, ...args) {
            const result = original.call(this, key, ...args);
            if (result != null)
              return result;
            const closestMatch = (0, fastest_levenshtein_1.closest)(key, this[candidatesKey].map(nameGetter));
            (0, console_1.raise)(`couldn't find ${propertyKey} ${key} in ${this.name}${closestMatch ? `, did you mean ${closestMatch}?` : ``}`);
          };
        };
      }
      exports.levenshtein = levenshtein;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/assembly.js
  var require_assembly = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/assembly.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var native_struct_1 = require_native_struct();
      var utils_1 = require_utils2();
      var Il2CppAssembly = class Il2CppAssembly extends native_struct_1.NonNullNativeStruct {
        /** Gets the image of this assembly. */
        get image() {
          return new Il2Cpp.Image(Il2Cpp.Api._assemblyGetImage(this));
        }
        /** Gets the name of this assembly. */
        get name() {
          return this.image.name.replace(".dll", "");
        }
        /** Gets the encompassing object of the current assembly. */
        get object() {
          return Il2Cpp.Image.corlib.class("System.Reflection.Assembly").method("Load").invoke(Il2Cpp.String.from(this.name));
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppAssembly.prototype, "image", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppAssembly.prototype, "name", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppAssembly.prototype, "object", null);
      Il2CppAssembly = __decorate([
        utils_1.cacheInstances
      ], Il2CppAssembly);
      Il2Cpp.Assembly = Il2CppAssembly;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/class.js
  var require_class = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/class.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var console_1 = require_console();
      var native_struct_1 = require_native_struct();
      var utils_1 = require_utils2();
      var Il2CppClass = class Il2CppClass extends native_struct_1.NonNullNativeStruct {
        /** Gets the actual size of the instance of the current class. */
        get actualInstanceSize() {
          return Il2Cpp.Api._classGetActualInstanceSize(this);
        }
        /** Gets the array class which encompass the current class. */
        get arrayClass() {
          return new Il2Cpp.Class(Il2Cpp.Api._classGetArrayClass(this, 1));
        }
        /** Gets the size of the object encompassed by the current array class. */
        get arrayElementSize() {
          return Il2Cpp.Api._classGetArrayElementSize(this);
        }
        /** Gets the name of the assembly in which the current class is defined. */
        get assemblyName() {
          return Il2Cpp.Api._classGetAssemblyName(this).readUtf8String();
        }
        /** Gets the class that declares the current nested class. */
        get declaringClass() {
          const handle = Il2Cpp.Api._classGetDeclaringType(this);
          return handle.isNull() ? null : new Il2Cpp.Class(handle);
        }
        /** Gets the encompassed type of this array, reference, pointer or enum type. */
        get baseType() {
          const handle = Il2Cpp.Api._classGetBaseType(this);
          return handle.isNull() ? null : new Il2Cpp.Type(handle);
        }
        /** Gets the class of the object encompassed or referred to by the current array, pointer or reference class. */
        get elementClass() {
          const handle = Il2Cpp.Api._classGetElementClass(this);
          return handle.isNull() ? null : new Il2Cpp.Class(handle);
        }
        /** Gets the fields of the current class. */
        get fields() {
          return Array.from((0, utils_1.nativeIterator)(this, Il2Cpp.Api._classGetFields, Il2Cpp.Field));
        }
        /** Gets the flags of the current class. */
        get flags() {
          return Il2Cpp.Api._classGetFlags(this);
        }
        /** Gets the amount of generic parameters of this generic class. */
        get genericParameterCount() {
          if (!this.isGeneric) {
            return 0;
          }
          return this.type.object.method("GetGenericArguments").invoke().length;
        }
        /** Determines whether the GC has tracking references to the current class instances. */
        get hasReferences() {
          return !!Il2Cpp.Api._classHasReferences(this);
        }
        /** Determines whether ther current class has a valid static constructor. */
        get hasStaticConstructor() {
          const staticConstructor = this.tryMethod(".cctor");
          return staticConstructor != null && !staticConstructor.virtualAddress.isNull();
        }
        /** Gets the image in which the current class is defined. */
        get image() {
          return new Il2Cpp.Image(Il2Cpp.Api._classGetImage(this));
        }
        /** Gets the size of the instance of the current class. */
        get instanceSize() {
          return Il2Cpp.Api._classGetInstanceSize(this);
        }
        /** Determines whether the current class is abstract. */
        get isAbstract() {
          return !!Il2Cpp.Api._classIsAbstract(this);
        }
        /** Determines whether the current class is blittable. */
        get isBlittable() {
          return !!Il2Cpp.Api._classIsBlittable(this);
        }
        /** Determines whether the current class is an enumeration. */
        get isEnum() {
          return !!Il2Cpp.Api._classIsEnum(this);
        }
        /** Determines whether the current class is a generic one. */
        get isGeneric() {
          return !!Il2Cpp.Api._classIsGeneric(this);
        }
        /** Determines whether the current class is inflated. */
        get isInflated() {
          return !!Il2Cpp.Api._classIsInflated(this);
        }
        /** Determines whether the current class is an interface. */
        get isInterface() {
          return !!Il2Cpp.Api._classIsInterface(this);
        }
        /** Determines whether the current class is a value type. */
        get isValueType() {
          return !!Il2Cpp.Api._classIsValueType(this);
        }
        /** Gets the interfaces implemented or inherited by the current class. */
        get interfaces() {
          return Array.from((0, utils_1.nativeIterator)(this, Il2Cpp.Api._classGetInterfaces, Il2Cpp.Class));
        }
        /** Gets the methods implemented by the current class. */
        get methods() {
          return Array.from((0, utils_1.nativeIterator)(this, Il2Cpp.Api._classGetMethods, Il2Cpp.Method));
        }
        /** Gets the name of the current class. */
        get name() {
          return Il2Cpp.Api._classGetName(this).readUtf8String();
        }
        /** Gets the namespace of the current class. */
        get namespace() {
          return Il2Cpp.Api._classGetNamespace(this).readUtf8String();
        }
        /** Gets the classes nested inside the current class. */
        get nestedClasses() {
          return Array.from((0, utils_1.nativeIterator)(this, Il2Cpp.Api._classGetNestedClasses, Il2Cpp.Class));
        }
        /** Gets the class from which the current class directly inherits. */
        get parent() {
          const handle = Il2Cpp.Api._classGetParent(this);
          return handle.isNull() ? null : new Il2Cpp.Class(handle);
        }
        /** Gets the rank (number of dimensions) of the current array class. */
        get rank() {
          return Il2Cpp.Api._classGetRank(this);
        }
        /** Gets a pointer to the static fields of the current class. */
        get staticFieldsData() {
          return Il2Cpp.Api._classGetStaticFieldData(this);
        }
        /** Gets the size of the instance - as a value type - of the current class. */
        get valueSize() {
          return Il2Cpp.Api._classGetValueSize(this, NULL);
        }
        /** Gets the type of the current class. */
        get type() {
          return new Il2Cpp.Type(Il2Cpp.Api._classGetType(this));
        }
        /** Allocates a new object of the current class. */
        alloc() {
          return new Il2Cpp.Object(Il2Cpp.Api._objectNew(this));
        }
        /** Gets the field identified by the given name. */
        field(name) {
          return this.tryField(name);
        }
        /** Builds a generic instance of the current generic class. */
        inflate(...classes) {
          if (!this.isGeneric) {
            (0, console_1.raise)(`cannot inflate class ${this.type.name}: it has no generic parameters`);
          }
          if (this.genericParameterCount != classes.length) {
            (0, console_1.raise)(`cannot inflate class ${this.type.name}: it needs ${this.genericParameterCount} generic parameter(s), not ${classes.length}`);
          }
          const types = classes.map((klass) => klass.type.object);
          const typeArray = Il2Cpp.Array.from(Il2Cpp.Image.corlib.class("System.Type"), types);
          const inflatedType = this.type.object.method("MakeGenericType", 1).invoke(typeArray);
          return new Il2Cpp.Class(Il2Cpp.Api._classFromSystemType(inflatedType));
        }
        /** Calls the static constructor of the current class. */
        initialize() {
          Il2Cpp.Api._classInit(this);
        }
        /** Determines whether an instance of `other` class can be assigned to a variable of the current type. */
        isAssignableFrom(other) {
          return !!Il2Cpp.Api._classIsAssignableFrom(this, other);
        }
        /** Determines whether the current class derives from `other` class. */
        isSubclassOf(other, checkInterfaces) {
          return !!Il2Cpp.Api._classIsSubclassOf(this, other, +checkInterfaces);
        }
        /** Gets the method identified by the given name and parameter count. */
        method(name, parameterCount = -1) {
          return this.tryMethod(name, parameterCount);
        }
        /** Gets the nested class with the given name. */
        nested(name) {
          return this.tryNested(name);
        }
        /** Allocates a new object of the current class and calls its default constructor. */
        new() {
          const object = this.alloc();
          const exceptionArray = Memory.alloc(Process.pointerSize);
          Il2Cpp.Api._objectInit(object, exceptionArray);
          const exception = exceptionArray.readPointer();
          if (!exception.isNull()) {
            (0, console_1.raise)(new Il2Cpp.Object(exception).toString());
          }
          return object;
        }
        /** Gets the field with the given name. */
        tryField(name) {
          const handle = Il2Cpp.Api._classGetFieldFromName(this, Memory.allocUtf8String(name));
          return handle.isNull() ? null : new Il2Cpp.Field(handle);
        }
        /** Gets the method with the given name and parameter count. */
        tryMethod(name, parameterCount = -1) {
          const handle = Il2Cpp.Api._classGetMethodFromName(this, Memory.allocUtf8String(name), parameterCount);
          return handle.isNull() ? null : new Il2Cpp.Method(handle);
        }
        /** Gets the nested class with the given name. */
        tryNested(name) {
          return this.nestedClasses.find((e) => e.name == name);
        }
        /** */
        toString() {
          const inherited = [this.parent].concat(this.interfaces);
          return `// ${this.assemblyName}
${this.isEnum ? `enum` : this.isValueType ? `struct` : this.isInterface ? `interface` : `class`} ${this.type.name}${inherited ? ` : ${inherited.map((e) => e?.type.name).join(`, `)}` : ``}
{
    ${this.fields.join(`
    `)}
    ${this.methods.join(`
    `)}
}`;
        }
        /** Executes a callback for every defined class. */
        static enumerate(block) {
          const callback = new NativeCallback(function(klass, _) {
            block(new Il2Cpp.Class(klass));
          }, "void", ["pointer", "pointer"]);
          return Il2Cpp.Api._classForEach(callback, NULL);
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "actualInstanceSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "arrayClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "arrayElementSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "assemblyName", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "declaringClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "baseType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "elementClass", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "fields", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "flags", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "genericParameterCount", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "hasReferences", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "hasStaticConstructor", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "image", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "instanceSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "isAbstract", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "isBlittable", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "isEnum", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "isGeneric", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "isInflated", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "isInterface", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "isValueType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "interfaces", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "methods", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "name", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "namespace", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "nestedClasses", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "parent", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "rank", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "staticFieldsData", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "valueSize", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppClass.prototype, "type", null);
      __decorate([
        (0, utils_1.levenshtein)("fields")
      ], Il2CppClass.prototype, "field", null);
      __decorate([
        (0, utils_1.levenshtein)("methods")
      ], Il2CppClass.prototype, "method", null);
      __decorate([
        (0, utils_1.levenshtein)("nestedClasses")
      ], Il2CppClass.prototype, "nested", null);
      Il2CppClass = __decorate([
        utils_1.cacheInstances
      ], Il2CppClass);
      Il2Cpp.Class = Il2CppClass;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/domain.js
  var require_domain = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/domain.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var utils_1 = require_utils2();
      var Il2CppDomain = class {
        constructor() {
        }
        /** Gets the assemblies that have been loaded into the execution context of the application domain. */
        static get assemblies() {
          const sizePointer = Memory.alloc(Process.pointerSize);
          const startPointer = Il2Cpp.Api._domainGetAssemblies(this, sizePointer);
          const count = sizePointer.readInt();
          const array = new Array(count);
          for (let i = 0; i < count; i++) {
            array[i] = new Il2Cpp.Assembly(startPointer.add(i * Process.pointerSize).readPointer());
          }
          if (count == 0) {
            for (const assemblyObject of this.object.method("GetAssemblies").overload().invoke()) {
              const assemblyName = assemblyObject.method("GetSimpleName").invoke().content;
              if (assemblyName != null) {
                array.push(this.assembly(assemblyName));
              }
            }
          }
          return array;
        }
        /** Gets the application domain handle. */
        static get handle() {
          return Il2Cpp.Api._domainGet();
        }
        /** Gets the encompassing object of the application domain. */
        static get object() {
          return Il2Cpp.Image.corlib.class("System.AppDomain").method("get_CurrentDomain").invoke();
        }
        /** Opens and loads the assembly with the given name. */
        static assembly(name) {
          return this.tryAssembly(name);
        }
        /** Attached a new thread to the application domain. */
        static attach() {
          return new Il2Cpp.Thread(Il2Cpp.Api._threadAttach(this));
        }
        /** Opens and loads the assembly with the given name. */
        static tryAssembly(name) {
          const handle = Il2Cpp.Api._domainAssemblyOpen(this, Memory.allocUtf8String(name));
          return handle.isNull() ? null : new Il2Cpp.Assembly(handle);
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppDomain, "assemblies", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppDomain, "handle", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppDomain, "object", null);
      __decorate([
        (0, utils_1.levenshtein)("assemblies")
      ], Il2CppDomain, "assembly", null);
      Il2Cpp.Domain = Il2CppDomain;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/field.js
  var require_field = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/field.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var console_1 = require_console();
      var native_struct_1 = require_native_struct();
      var utils_1 = require_utils();
      var Il2CppField = class extends native_struct_1.NonNullNativeStruct {
        /** Gets the class in which this field is defined. */
        get class() {
          return new Il2Cpp.Class(Il2Cpp.Api._fieldGetClass(this));
        }
        /** Gets the flags of the current field. */
        get flags() {
          return Il2Cpp.Api._fieldGetFlags(this);
        }
        /** Determines whether this field value is known at compile time. */
        get isLiteral() {
          return !!Il2Cpp.Api._fieldIsLiteral(this);
        }
        /** Determines whether this field is static. */
        get isStatic() {
          return !!Il2Cpp.Api._fieldIsStatic(this);
        }
        /** Determines whether this field is thread static. */
        get isThreadStatic() {
          return !!Il2Cpp.Api._fieldIsThreadStatic(this);
        }
        /** Gets the access modifier of this field. */
        get modifier() {
          return Il2Cpp.Api._fieldGetModifier(this).readUtf8String();
        }
        /** Gets the name of this field. */
        get name() {
          return Il2Cpp.Api._fieldGetName(this).readUtf8String();
        }
        /** Gets the offset of this field, calculated as the difference with its owner virtual address. */
        get offset() {
          return Il2Cpp.Api._fieldGetOffset(this);
        }
        /** Gets the type of this field. */
        get type() {
          return new Il2Cpp.Type(Il2Cpp.Api._fieldGetType(this));
        }
        /** Gets the value of this field. */
        get value() {
          const handle = Memory.alloc(Process.pointerSize);
          Il2Cpp.Api._fieldGetStaticValue(this.handle, handle);
          return (0, utils_1.read)(handle, this.type);
        }
        /** Sets the value of this field. Thread static or literal values cannot be altered yet. */
        set value(value) {
          if (this.isThreadStatic || this.isLiteral) {
            (0, console_1.raise)(`cannot modify the value of field ${this.name}: is thread static or literal`);
          }
          const handle = Memory.alloc(Process.pointerSize);
          (0, utils_1.write)(handle, value, this.type);
          Il2Cpp.Api._fieldSetStaticValue(this.handle, handle);
        }
        /** */
        toString() {
          return `${this.isThreadStatic ? `[ThreadStatic] ` : ``}${this.isStatic ? `static ` : ``}${this.type.name} ${this.name}${this.isLiteral ? ` = ${this.type.class.isEnum ? (0, utils_1.read)(this.value.handle, this.type.class.baseType) : this.value}` : ``};${this.isThreadStatic || this.isLiteral ? `` : ` // 0x${this.offset.toString(16)}`}`;
        }
        /** @internal */
        withHolder(instance) {
          let valueHandle = instance.handle.add(this.offset);
          if (instance instanceof Il2Cpp.ValueType) {
            valueHandle = valueHandle.sub(Il2Cpp.Runtime.objectHeaderSize);
          }
          return new Proxy(this, {
            get(target, property) {
              if (property == "value") {
                return (0, utils_1.read)(valueHandle, target.type);
              }
              return Reflect.get(target, property);
            },
            set(target, property, value) {
              if (property == "value") {
                (0, utils_1.write)(valueHandle, value, target.type);
                return true;
              }
              return Reflect.set(target, property, value);
            }
          });
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppField.prototype, "class", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppField.prototype, "flags", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppField.prototype, "isLiteral", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppField.prototype, "isStatic", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppField.prototype, "isThreadStatic", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppField.prototype, "name", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppField.prototype, "offset", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppField.prototype, "type", null);
      Reflect.set(Il2Cpp, "Field", Il2CppField);
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/gc.js
  var require_gc = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/gc.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var versioning_1 = __importDefault(require_versioning());
      var Il2CppGC = class {
        constructor() {
        }
        /** Gets the heap size in bytes. */
        static get heapSize() {
          return Il2Cpp.Api._gcGetHeapSize();
        }
        /** Determines whether the garbage collector is disabled. */
        static get isEnabled() {
          return !Il2Cpp.Api._gcIsDisabled();
        }
        /** Determines whether the garbage collector is incremental. */
        static get isIncremental() {
          return !!Il2Cpp.Api._gcIsIncremental();
        }
        /** Gets the number of nanoseconds the garbage collector can spend in a collection step. */
        static get maxTimeSlice() {
          return Il2Cpp.Api._gcGetMaxTimeSlice();
        }
        /** Gets the used heap size in bytes. */
        static get usedHeapSize() {
          return Il2Cpp.Api._gcGetUsedSize();
        }
        /** Enables or disables the garbage collector. */
        static set isEnabled(value) {
          value ? Il2Cpp.Api._gcEnable() : Il2Cpp.Api._gcDisable();
        }
        /** Sets the number of nanoseconds the garbage collector can spend in a collection step. */
        static set maxTimeSlice(nanoseconds) {
          Il2Cpp.Api._gcSetMaxTimeSlice(nanoseconds);
        }
        /** Returns the heap allocated objects of the specified class. This variant reads GC descriptors. */
        static choose(klass) {
          const matches = [];
          const callback = (objects, size, _) => {
            for (let i = 0; i < size; i++) {
              matches.push(new Il2Cpp.Object(objects.add(i * Process.pointerSize).readPointer()));
            }
          };
          const chooseCallback = new NativeCallback(callback, "void", ["pointer", "int", "pointer"]);
          if (versioning_1.default.gte(Il2Cpp.unityVersion, "2021.2.0")) {
            const realloc = (handle, size) => {
              if (!handle.isNull() && size.compare(0) == 0) {
                Il2Cpp.free(handle);
                return NULL;
              } else {
                return Il2Cpp.alloc(size);
              }
            };
            const reallocCallback = new NativeCallback(realloc, "pointer", ["pointer", "size_t", "pointer"]);
            const state = Il2Cpp.Api._livenessAllocateStruct(klass.handle, 0, chooseCallback, NULL, reallocCallback);
            Il2Cpp.Api._livenessCalculationFromStatics(state);
            Il2Cpp.Api._livenessFinalize(state);
            Il2Cpp.Api._livenessFreeStruct(state);
          } else {
            const onWorld = new NativeCallback(() => {
            }, "void", []);
            const state = Il2Cpp.Api._livenessCalculationBegin(klass.handle, 0, chooseCallback, NULL, onWorld, onWorld);
            Il2Cpp.Api._livenessCalculationFromStatics(state);
            Il2Cpp.Api._livenessCalculationEnd(state);
          }
          return matches;
        }
        /** Forces a garbage collection of the specified generation. */
        static collect(generation) {
          Il2Cpp.Api._gcCollect(generation < 0 ? 0 : generation > 2 ? 2 : generation);
        }
        /** Forces a garbage collection. */
        static collectALittle() {
          Il2Cpp.Api._gcCollectALittle();
        }
        /** Resumes all the previously stopped threads. */
        static startWorld() {
          return Il2Cpp.Api._gcStartWorld();
        }
        /** Performs an incremental garbage collection. */
        static startIncrementalCollection() {
          return Il2Cpp.Api._gcStartIncrementalCollection();
        }
        /** Stops all threads which may access the garbage collected heap, other than the caller. */
        static stopWorld() {
          return Il2Cpp.Api._gcStopWorld();
        }
      };
      Reflect.set(Il2Cpp, "GC", Il2CppGC);
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/gc-handle.js
  var require_gc_handle = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/gc-handle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Il2CppGCHandle = class {
        handle;
        /** @internal */
        constructor(handle) {
          this.handle = handle;
        }
        /** Gets the object associated to this handle. */
        get target() {
          const handle = Il2Cpp.Api._gcHandleGetTarget(this.handle);
          return handle.isNull() ? null : new Il2Cpp.Object(handle);
        }
        /** Frees this handle. */
        free() {
          return Il2Cpp.Api._gcHandleFree(this.handle);
        }
      };
      Il2Cpp.GC.Handle = Il2CppGCHandle;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/image.js
  var require_image = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/image.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var native_struct_1 = require_native_struct();
      var utils_1 = require_utils2();
      var Il2CppImage = class Il2CppImage extends native_struct_1.NonNullNativeStruct {
        /** Gets the COR library. */
        static get corlib() {
          return new Il2Cpp.Image(Il2Cpp.Api._getCorlib());
        }
        /** Gets the assembly in which the current image is defined. */
        get assembly() {
          return new Il2Cpp.Assembly(Il2Cpp.Api._imageGetAssembly(this));
        }
        /** Gets the amount of classes defined in this image. */
        get classCount() {
          return Il2Cpp.Api._imageGetClassCount(this);
        }
        /** Gets the classes defined in this image. */
        get classes() {
          if (Il2Cpp.unityVersionIsBelow201830) {
            const types = this.assembly.object.method("GetTypes").invoke(false);
            return Array.from(types).map((e) => new Il2Cpp.Class(Il2Cpp.Api._classFromSystemType(e)));
          } else {
            return Array.from(Array(this.classCount), (_, i) => new Il2Cpp.Class(Il2Cpp.Api._imageGetClass(this, i)));
          }
        }
        /** Gets the name of this image. */
        get name() {
          return Il2Cpp.Api._imageGetName(this).readUtf8String();
        }
        /** Gets the class with the specified name defined in this image. */
        class(name) {
          return this.tryClass(name);
        }
        /** Gets the class with the specified name defined in this image. */
        tryClass(name) {
          const dotIndex = name.lastIndexOf(".");
          const classNamespace = Memory.allocUtf8String(dotIndex == -1 ? "" : name.slice(0, dotIndex));
          const className = Memory.allocUtf8String(name.slice(dotIndex + 1));
          const handle = Il2Cpp.Api._classFromName(this, classNamespace, className);
          return handle.isNull() ? null : new Il2Cpp.Class(handle);
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppImage.prototype, "assembly", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppImage.prototype, "classCount", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppImage.prototype, "classes", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppImage.prototype, "name", null);
      __decorate([
        (0, utils_1.levenshtein)("classes", (e) => e.namespace ? `${e.namespace}.${e.name}` : e.name)
      ], Il2CppImage.prototype, "class", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppImage, "corlib", null);
      Il2CppImage = __decorate([
        utils_1.cacheInstances
      ], Il2CppImage);
      Il2Cpp.Image = Il2CppImage;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/memory-snapshot.js
  var require_memory_snapshot = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/memory-snapshot.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var native_struct_1 = require_native_struct();
      var utils_1 = require_utils2();
      var Il2CppMemorySnapshot = class extends native_struct_1.NonNullNativeStruct {
        /** Captures a memory snapshot. */
        static capture() {
          return new Il2Cpp.MemorySnapshot();
        }
        /** Creates a memory snapshot with the given handle. */
        constructor(handle = Il2Cpp.Api._memorySnapshotCapture()) {
          super(handle);
        }
        /** Gets any initialized class. */
        get classes() {
          return Array.from((0, utils_1.nativeIterator)(this, Il2Cpp.Api._memorySnapshotGetClasses, Il2Cpp.Class));
        }
        /** Gets the objects tracked by this memory snapshot. */
        get objects() {
          const array = [];
          const [count, start] = Il2Cpp.Api._memorySnapshotGetGCHandles(this);
          for (let i = 0; i < count; i++) {
            array.push(new Il2Cpp.Object(start.add(i * Process.pointerSize).readPointer()));
          }
          return array;
        }
        /** Frees this memory snapshot. */
        free() {
          Il2Cpp.Api._memorySnapshotFree(this);
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMemorySnapshot.prototype, "classes", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMemorySnapshot.prototype, "objects", null);
      Il2Cpp.MemorySnapshot = Il2CppMemorySnapshot;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/method.js
  var require_method = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/method.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var console_1 = require_console();
      var native_struct_1 = require_native_struct();
      var utils_1 = require_utils2();
      var utils_2 = require_utils();
      var Il2CppMethod = class extends native_struct_1.NonNullNativeStruct {
        /** Gets the class in which this method is defined. */
        get class() {
          return new Il2Cpp.Class(Il2Cpp.Api._methodGetClass(this));
        }
        /** Gets the flags of the current method. */
        get flags() {
          return Il2Cpp.Api._methodGetFlags(this, NULL);
        }
        /** Gets the implementation flags of the current method. */
        get implementationFlags() {
          const implementationFlagsPointer = Memory.alloc(Process.pointerSize);
          Il2Cpp.Api._methodGetFlags(this, implementationFlagsPointer);
          return implementationFlagsPointer.readU32();
        }
        /** */
        get fridaSignature() {
          const types = [];
          for (const parameter of this.parameters) {
            types.push(parameter.type.fridaAlias);
          }
          if (!this.isStatic || Il2Cpp.unityVersionIsBelow201830) {
            types.unshift("pointer");
          }
          if (this.isInflated) {
            types.push("pointer");
          }
          return types;
        }
        /** Gets the amount of generic parameters of this generic method. */
        get genericParameterCount() {
          if (!this.isGeneric) {
            return 0;
          }
          return this.object.method("GetGenericArguments").invoke().length;
        }
        /** Determines whether this method is external. */
        get isExternal() {
          return !!Il2Cpp.Api._methodIsExternal(this);
        }
        /** Determines whether this method is generic. */
        get isGeneric() {
          return !!Il2Cpp.Api._methodIsGeneric(this);
        }
        /** Determines whether this method is inflated (generic with a concrete type parameter). */
        get isInflated() {
          return !!Il2Cpp.Api._methodIsInflated(this);
        }
        /** Determines whether this method is static. */
        get isStatic() {
          return !Il2Cpp.Api._methodIsInstance(this);
        }
        /** Determines whether this method is synchronized. */
        get isSynchronized() {
          return !!Il2Cpp.Api._methodIsSynchronized(this);
        }
        /** Gets the access modifier of this method. */
        get modifier() {
          return Il2Cpp.Api._methodGetModifier(this).readUtf8String();
        }
        /** Gets the name of this method. */
        get name() {
          return Il2Cpp.Api._methodGetName(this).readUtf8String();
        }
        /** @internal */
        get nativeFunction() {
          return new NativeFunction(this.virtualAddress, this.returnType.fridaAlias, this.fridaSignature);
        }
        /** Gets the encompassing object of the current method. */
        get object() {
          return new Il2Cpp.Object(Il2Cpp.Api._methodGetObject(this, NULL));
        }
        /** Gets the amount of parameters of this method. */
        get parameterCount() {
          return Il2Cpp.Api._methodGetParameterCount(this);
        }
        /** Gets the parameters of this method. */
        get parameters() {
          return Array.from(Array(this.parameterCount), (_, i) => {
            const parameterName = Il2Cpp.Api._methodGetParameterName(this, i).readUtf8String();
            const parameterType = Il2Cpp.Api._methodGetParameterType(this, i);
            return new Il2Cpp.Parameter(parameterName, i, new Il2Cpp.Type(parameterType));
          });
        }
        /** Gets the relative virtual address (RVA) of this method. */
        get relativeVirtualAddress() {
          return this.virtualAddress.sub(Il2Cpp.module.base);
        }
        /** Gets the return type of this method. */
        get returnType() {
          return new Il2Cpp.Type(Il2Cpp.Api._methodGetReturnType(this));
        }
        /** Gets the virtual address (VA) to this method. */
        get virtualAddress() {
          return Il2Cpp.Api._methodGetPointer(this);
        }
        /** Replaces the body of this method. */
        set implementation(block) {
          const startIndex = +!this.isStatic | +Il2Cpp.unityVersionIsBelow201830;
          const callback = (...args) => {
            const parameters = this.parameters.map((e, i) => (0, utils_2.fromFridaValue)(args[i + startIndex], e.type));
            return (0, utils_2.toFridaValue)(block.call(this.isStatic ? this.class : new Il2Cpp.Object(args[0]), ...parameters));
          };
          try {
            Interceptor.replace(this.virtualAddress, new NativeCallback(callback, this.returnType.fridaAlias, this.fridaSignature));
          } catch (e) {
            switch (e.message) {
              case "access violation accessing 0x0":
                (0, console_1.raise)(`cannot implement method ${this.name}: it has a NULL virtual address`);
              case `unable to intercept function at ${this.virtualAddress}; please file a bug`:
                (0, console_1.warn)(`cannot implement method ${this.name}: it may be a thunk`);
                break;
              case "already replaced this function":
                (0, console_1.warn)(`cannot implement method ${this.name}: already replaced by a thunk`);
                break;
              default:
                throw e;
            }
          }
        }
        /** Creates a generic instance of the current generic method. */
        inflate(...classes) {
          if (!this.isGeneric) {
            (0, console_1.raise)(`cannot inflate method ${this.name}: it has no generic parameters`);
          }
          if (this.genericParameterCount != classes.length) {
            (0, console_1.raise)(`cannot inflate method ${this.name}: it needs ${this.genericParameterCount} generic parameter(s), not ${classes.length}`);
          }
          const types = classes.map((klass) => klass.type.object);
          const typeArray = Il2Cpp.Array.from(Il2Cpp.Image.corlib.class("System.Type"), types);
          const inflatedMethodObject = this.object.method("MakeGenericMethod", 1).invoke(typeArray);
          return new Il2Cpp.Method(Il2Cpp.Api._methodGetFromReflection(inflatedMethodObject));
        }
        /** Invokes this method. */
        invoke(...parameters) {
          if (!this.isStatic) {
            (0, console_1.raise)(`cannot invoke a non-static method ${this.name}: must be invoked throught a Il2Cpp.Object, not a Il2Cpp.Class`);
          }
          return this.invokeRaw(NULL, ...parameters);
        }
        /** @internal */
        invokeRaw(instance, ...parameters) {
          const allocatedParameters = parameters.map(utils_2.toFridaValue);
          if (!this.isStatic || Il2Cpp.unityVersionIsBelow201830) {
            allocatedParameters.unshift(instance);
          }
          if (this.isInflated) {
            allocatedParameters.push(this.handle);
          }
          try {
            const returnValue = this.nativeFunction(...allocatedParameters);
            return (0, utils_2.fromFridaValue)(returnValue, this.returnType);
          } catch (e) {
            if (e == null) {
              (0, console_1.raise)("an unexpected native function exception occurred, this is due to parameter types mismatch");
            }
            switch (e.message) {
              case "bad argument count":
                (0, console_1.raise)(`cannot invoke method ${this.name}: it needs ${this.parameterCount} parameter(s), not ${parameters.length}`);
              case "expected a pointer":
              case "expected number":
              case "expected array with fields":
                (0, console_1.raise)(`cannot invoke method ${this.name}: parameter types mismatch`);
            }
            throw e;
          }
        }
        /** Gets the overloaded method with the given parameter types. */
        overload(...parameterTypes) {
          const result = this.tryOverload(...parameterTypes);
          if (result != void 0)
            return result;
          (0, console_1.raise)(`cannot find overloaded method ${this.name}(${parameterTypes})`);
        }
        /** Gets the parameter with the given name. */
        parameter(name) {
          return this.tryParameter(name);
        }
        /** Restore the original method implementation. */
        revert() {
          Interceptor.revert(this.virtualAddress);
          Interceptor.flush();
        }
        /** Gets the overloaded method with the given parameter types. */
        tryOverload(...parameterTypes) {
          return this.class.methods.find((e) => e.name == this.name && e.parameterCount == parameterTypes.length && e.parameters.every((e2, i) => e2.type.name == parameterTypes[i]));
        }
        /** Gets the parameter with the given name. */
        tryParameter(name) {
          return this.parameters.find((e) => e.name == name);
        }
        /** */
        toString() {
          return `${this.isStatic ? `static ` : ``}${this.returnType.name} ${this.name}(${this.parameters.join(`, `)});${this.virtualAddress.isNull() ? `` : ` // 0x${this.relativeVirtualAddress.toString(16).padStart(8, `0`)}`}`;
        }
        /** @internal */
        withHolder(instance) {
          return new Proxy(this, {
            get(target, property) {
              switch (property) {
                case "invoke":
                  return target.invokeRaw.bind(target, instance.handle);
                case "inflate":
                case "overload":
                case "tryOverload":
                  return function(...args) {
                    return target[property](...args)?.withHolder(instance);
                  };
              }
              return Reflect.get(target, property);
            }
          });
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "class", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "flags", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "implementationFlags", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "fridaSignature", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "genericParameterCount", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "isExternal", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "isGeneric", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "isInflated", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "isStatic", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "isSynchronized", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "name", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "nativeFunction", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "object", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "parameterCount", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "parameters", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "relativeVirtualAddress", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "returnType", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppMethod.prototype, "virtualAddress", null);
      __decorate([
        (0, utils_1.levenshtein)("parameters")
      ], Il2CppMethod.prototype, "parameter", null);
      Reflect.set(Il2Cpp, "Method", Il2CppMethod);
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/object.js
  var require_object = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/object.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var native_struct_1 = require_native_struct();
      var Il2CppObject = class extends native_struct_1.NativeStruct {
        /** Gets the class of this object. */
        get class() {
          return new Il2Cpp.Class(Il2Cpp.Api._objectGetClass(this));
        }
        /** Gets the size of the current object. */
        get size() {
          return Il2Cpp.Api._objectGetSize(this);
        }
        /** Acquires an exclusive lock on the current object. */
        enter() {
          return Il2Cpp.Api._monitorEnter(this);
        }
        /** Release an exclusive lock on the current object. */
        exit() {
          return Il2Cpp.Api._monitorExit(this);
        }
        /** Gets the field with the given name. */
        field(name) {
          return this.class.field(name).withHolder(this);
        }
        /** Gets the method with the given name. */
        method(name, parameterCount = -1) {
          return this.class.method(name, parameterCount).withHolder(this);
        }
        /** Notifies a thread in the waiting queue of a change in the locked object's state. */
        pulse() {
          return Il2Cpp.Api._monitorPulse(this);
        }
        /** Notifies all waiting threads of a change in the object's state. */
        pulseAll() {
          return Il2Cpp.Api._monitorPulseAll(this);
        }
        /** Creates a reference to this object. */
        ref(pin) {
          return new Il2Cpp.GC.Handle(Il2Cpp.Api._gcHandleNew(this, +pin));
        }
        /** Gets the correct virtual method from the given virtual method. */
        virtualMethod(method) {
          return new Il2Cpp.Method(Il2Cpp.Api._objectGetVirtualMethod(this, method)).withHolder(this);
        }
        /** Attempts to acquire an exclusive lock on the current object. */
        tryEnter(timeout) {
          return !!Il2Cpp.Api._monitorTryEnter(this, timeout);
        }
        /** Gets the field with the given name. */
        tryField(name) {
          return this.class.tryField(name)?.withHolder(this);
        }
        /** Gets the field with the given name. */
        tryMethod(name, parameterCount = -1) {
          return this.class.tryMethod(name, parameterCount)?.withHolder(this);
        }
        /** Releases the lock on an object and attempts to block the current thread until it reacquires the lock. */
        tryWait(timeout) {
          return !!Il2Cpp.Api._monitorTryWait(this, timeout);
        }
        /** */
        toString() {
          return this.isNull() ? "null" : this.method("ToString").invoke().content ?? "null";
        }
        /** Unboxes the value type out of this object. */
        unbox() {
          return new Il2Cpp.ValueType(Il2Cpp.Api._objectUnbox(this), this.class.type);
        }
        /** Releases the lock on an object and blocks the current thread until it reacquires the lock. */
        wait() {
          return Il2Cpp.Api._monitorWait(this);
        }
        /** Creates a weak reference to this object. */
        weakRef(trackResurrection) {
          return new Il2Cpp.GC.Handle(Il2Cpp.Api._gcHandleNewWeakRef(this, +trackResurrection));
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppObject.prototype, "class", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppObject.prototype, "size", null);
      Il2Cpp.Object = Il2CppObject;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/parameter.js
  var require_parameter = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/parameter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Il2CppParameter = class {
        /** Name of this parameter. */
        name;
        /** Position of this parameter. */
        position;
        /** Type of this parameter. */
        type;
        constructor(name, position, type) {
          this.name = name;
          this.position = position;
          this.type = type;
        }
        /** */
        toString() {
          return `${this.type.name} ${this.name}`;
        }
      };
      Il2Cpp.Parameter = Il2CppParameter;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/pointer.js
  var require_pointer = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/pointer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var utils_1 = require_utils();
      var native_struct_1 = require_native_struct();
      var Il2CppPointer = class extends native_struct_1.NativeStruct {
        type;
        constructor(handle, type) {
          super(handle);
          this.type = type;
        }
        /** Gets the element at the given index. */
        get(index) {
          return (0, utils_1.read)(this.handle.add(index * this.type.class.arrayElementSize), this.type);
        }
        /** Reads the given amount of elements starting at the given offset. */
        read(length, offset = 0) {
          const values = new Array(length);
          for (let i = 0; i < length; i++) {
            values[i] = this.get(i + offset);
          }
          return values;
        }
        /** Sets the given element at the given index */
        set(index, value) {
          (0, utils_1.write)(this.handle.add(index * this.type.class.arrayElementSize), value, this.type);
        }
        /** */
        toString() {
          return this.handle.toString();
        }
        /** Writes the given elements starting at the given index. */
        write(values, offset = 0) {
          for (let i = 0; i < values.length; i++) {
            this.set(i + offset, values[i]);
          }
        }
      };
      Il2Cpp.Pointer = Il2CppPointer;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/reference.js
  var require_reference = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/reference.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var utils_1 = require_utils();
      var native_struct_1 = require_native_struct();
      var console_1 = require_console();
      var Il2CppReference = class extends native_struct_1.NativeStruct {
        type;
        constructor(handle, type) {
          super(handle);
          this.type = type;
        }
        /** Gets the element referenced by the current reference. */
        get value() {
          return (0, utils_1.read)(this.handle, this.type);
        }
        /** Sets the element referenced by the current reference. */
        set value(value) {
          (0, utils_1.write)(this.handle, value, this.type);
        }
        /** */
        toString() {
          return this.isNull() ? "null" : `->${this.value}`;
        }
        /** Creates a reference to the specified value. */
        static to(value, type) {
          const handle = Memory.alloc(Process.pointerSize);
          switch (typeof value) {
            case "boolean":
              return new Il2Cpp.Reference(handle.writeS8(+value), Il2Cpp.Image.corlib.class("System.Boolean").type);
            case "number":
              switch (type?.typeEnum) {
                case 5:
                  return new Il2Cpp.Reference(handle.writeU8(value), type);
                case 4:
                  return new Il2Cpp.Reference(handle.writeS8(value), type);
                case 3:
                case 7:
                  return new Il2Cpp.Reference(handle.writeU16(value), type);
                case 6:
                  return new Il2Cpp.Reference(handle.writeS16(value), type);
                case 9:
                  return new Il2Cpp.Reference(handle.writeU32(value), type);
                case 8:
                  return new Il2Cpp.Reference(handle.writeS32(value), type);
                case 11:
                  return new Il2Cpp.Reference(handle.writeU64(value), type);
                case 10:
                  return new Il2Cpp.Reference(handle.writeS64(value), type);
                case 12:
                  return new Il2Cpp.Reference(handle.writeFloat(value), type);
                case 13:
                  return new Il2Cpp.Reference(handle.writeDouble(value), type);
              }
            case "object":
              if (value instanceof Il2Cpp.ValueType || value instanceof Il2Cpp.Pointer) {
                return new Il2Cpp.Reference(handle.writePointer(value), value.type);
              } else if (value instanceof Il2Cpp.Object) {
                return new Il2Cpp.Reference(handle.writePointer(value), value.class.type);
              } else if (value instanceof Il2Cpp.String || value instanceof Il2Cpp.Array) {
                return new Il2Cpp.Reference(handle.writePointer(value), value.object.class.type);
              } else if (value instanceof NativePointer) {
                switch (type?.typeEnum) {
                  case 25:
                  case 24:
                    return new Il2Cpp.Reference(handle.writePointer(value), type);
                }
              } else if (value instanceof Int64) {
                return new Il2Cpp.Reference(handle.writeS64(value), Il2Cpp.Image.corlib.class("System.Int64").type);
              } else if (value instanceof UInt64) {
                return new Il2Cpp.Reference(handle.writeU64(value), Il2Cpp.Image.corlib.class("System.UInt64").type);
              }
            default:
              (0, console_1.raise)(`don't know how to create a reference to ${value} using type ${type?.name}`);
          }
        }
      };
      Il2Cpp.Reference = Il2CppReference;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/string.js
  var require_string = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/string.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var native_struct_1 = require_native_struct();
      var Il2CppString = class extends native_struct_1.NativeStruct {
        /** Gets the content of this string. */
        get content() {
          return Il2Cpp.Api._stringChars(this).readUtf16String(this.length);
        }
        /** Sets the content of this string. */
        set content(value) {
          Il2Cpp.Api._stringChars(this).writeUtf16String(value ?? "");
          Il2Cpp.Api._stringSetLength(this, value?.length ?? 0);
        }
        /** Gets the length of this string. */
        get length() {
          return Il2Cpp.Api._stringLength(this);
        }
        /** Gets the encompassing object of the current string. */
        get object() {
          return new Il2Cpp.Object(this);
        }
        /** */
        toString() {
          return this.isNull() ? "null" : `"${this.content}"`;
        }
        /** Creates a new string with the specified content. */
        static from(content) {
          return new Il2Cpp.String(Il2Cpp.Api._stringNew(Memory.allocUtf8String(content || "")));
        }
      };
      Il2Cpp.String = Il2CppString;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/thread.js
  var require_thread = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/thread.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var console_1 = require_console();
      var native_struct_1 = require_native_struct();
      var Il2CppThread = class extends native_struct_1.NativeStruct {
        /** @internal */
        static get idOffset() {
          const handle = ptr(Il2Cpp.currentThread.internal.field("thread_id").value.toString());
          const currentThreadId = Process.getCurrentThreadId();
          for (let i = 0; i < 1024; i++) {
            const candidate = handle.add(i).readS32();
            if (candidate == currentThreadId) {
              return i;
            }
          }
          (0, console_1.raise)(`couldn't determine the offset for a native thread id value`);
        }
        /** Gets the native id of the current thread. */
        get id() {
          return ptr(this.internal.field("thread_id").value.toString()).add(Il2Cpp.Thread.idOffset).readS32();
        }
        /** @internal Gets the encompassing internal object (System.Threding.InternalThreead) of the current thread. */
        get internal() {
          const internalThread = this.object.tryField("internal_thread")?.value;
          return internalThread ? internalThread : this.object;
        }
        /** Determines whether the current thread is the garbage collector finalizer one. */
        get isFinalizer() {
          return !Il2Cpp.Api._threadIsVm(this);
        }
        /** Gets the encompassing object of the current thread. */
        get object() {
          return new Il2Cpp.Object(this);
        }
        /** @internal */
        get staticData() {
          return this.internal.field("static_data").value;
        }
        /** @internal */
        get synchronizationContext() {
          const get_ExecutionContext = this.object.tryMethod("GetMutableExecutionContext") || this.object.method("get_ExecutionContext");
          let synchronizationContext = get_ExecutionContext.invoke().tryMethod("get_SynchronizationContext")?.invoke();
          if (synchronizationContext == null) {
            const SystemThreadingSynchronizationContext = Il2Cpp.Image.corlib.class("System.Threading.SynchronizationContext");
            for (let i = 0; i < 16; i++) {
              try {
                const candidate = new Il2Cpp.Object(this.staticData.add(Process.pointerSize * i).readPointer().readPointer());
                if (candidate.class.isSubclassOf(SystemThreadingSynchronizationContext, false)) {
                  synchronizationContext = candidate;
                  break;
                }
              } catch (e) {
              }
            }
          }
          if (synchronizationContext == null) {
            (0, console_1.raise)("couldn't retrieve the SynchronizationContext for this thread.");
          }
          return synchronizationContext;
        }
        /** Detaches the thread from the application domain. */
        detach() {
          return Il2Cpp.Api._threadDetach(this);
        }
        /** Schedules a callback on the current thread. */
        schedule(block, delayMs = 0) {
          const threadId = this.id;
          const GetDisplayName = Il2Cpp.Image.corlib.class("Mono.Runtime").method("GetDisplayName");
          const SendOrPostCallback = Il2Cpp.Image.corlib.class("System.Threading.SendOrPostCallback").alloc();
          SendOrPostCallback.method(".ctor").invoke(NULL, GetDisplayName.handle);
          const Post = this.synchronizationContext.method("Post");
          return new Promise((resolve) => {
            const listener = Interceptor.attach(GetDisplayName.virtualAddress, function() {
              if (this.threadId == threadId) {
                listener.detach();
                const result = block();
                setImmediate(() => resolve(result));
              }
            });
            setTimeout(() => Post.invoke(SendOrPostCallback, NULL), delayMs);
          });
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppThread.prototype, "internal", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppThread.prototype, "object", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppThread.prototype, "staticData", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppThread.prototype, "synchronizationContext", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppThread, "idOffset", null);
      Il2Cpp.Thread = Il2CppThread;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/type.js
  var require_type = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/type.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decorator_cache_getter_1 = require_dist();
      var native_struct_1 = require_native_struct();
      var Il2CppType = class extends native_struct_1.NonNullNativeStruct {
        /** Gets the class of this type. */
        get class() {
          return new Il2Cpp.Class(Il2Cpp.Api._classFromType(this));
        }
        /** */
        get fridaAlias() {
          if (this.isByReference) {
            return "pointer";
          }
          switch (this.typeEnum) {
            case 1:
              return "void";
            case 2:
              return "bool";
            case 3:
              return "uchar";
            case 4:
              return "int8";
            case 5:
              return "uint8";
            case 6:
              return "int16";
            case 7:
              return "uint16";
            case 8:
              return "int32";
            case 9:
              return "uint32";
            case 10:
              return "int64";
            case 11:
              return "uint64";
            case 12:
              return "float";
            case 13:
              return "double";
            case 17:
              return getValueTypeFields(this);
            case 24:
            case 25:
            case 15:
            case 14:
            case 29:
            case 20:
              return "pointer";
            case 18:
            case 28:
            case 21:
              return this.class.isValueType ? getValueTypeFields(this) : "pointer";
            default:
              return "pointer";
          }
        }
        /** Determines whether this type is passed by reference. */
        get isByReference() {
          return !!Il2Cpp.Api._typeIsByReference(this);
        }
        /** Determines whether this type is primitive. */
        get isPrimitive() {
          return !!Il2Cpp.Api._typeIsPrimitive(this);
        }
        /** Gets the name of this type. */
        get name() {
          const handle = Il2Cpp.Api._typeGetName(this);
          try {
            return handle.readUtf8String();
          } finally {
            Il2Cpp.free(handle);
          }
        }
        /** Gets the encompassing object of the current type. */
        get object() {
          return new Il2Cpp.Object(Il2Cpp.Api._typeGetObject(this));
        }
        /** Gets the type enum of the current type. */
        get typeEnum() {
          return Il2Cpp.Api._typeGetTypeEnum(this);
        }
        /** */
        toString() {
          return this.name;
        }
      };
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppType.prototype, "class", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppType.prototype, "fridaAlias", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppType.prototype, "isByReference", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppType.prototype, "isPrimitive", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppType.prototype, "name", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppType.prototype, "object", null);
      __decorate([
        decorator_cache_getter_1.cache
      ], Il2CppType.prototype, "typeEnum", null);
      function getValueTypeFields(type) {
        const instanceFields = type.class.fields.filter((f) => !f.isStatic);
        return instanceFields.length == 0 ? ["char"] : instanceFields.map((f) => f.type.fridaAlias);
      }
      Reflect.set(Il2Cpp, "Type", Il2CppType);
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/type-enum.js
  var require_type_enum = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/type-enum.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/value-type.js
  var require_value_type = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/structs/value-type.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var native_struct_1 = require_native_struct();
      var Il2CppValueType = class extends native_struct_1.NativeStruct {
        type;
        constructor(handle, type) {
          super(handle);
          this.type = type;
        }
        /** Boxes the current value type in a object. */
        box() {
          return new Il2Cpp.Object(Il2Cpp.Api._valueBox(this.type.class, this));
        }
        /** Gets the field with the given name. */
        field(name) {
          return this.type.class.field(name).withHolder(this);
        }
        /** */
        toString() {
          return this.isNull() ? "null" : this.box().toString();
        }
      };
      Il2Cpp.ValueType = Il2CppValueType;
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/index.js
  var require_il2cpp = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/il2cpp/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      require_base();
      require_api();
      require_filtering();
      require_runtime();
      require_tracer();
      require_array();
      require_assembly();
      require_class();
      require_domain();
      require_field();
      require_gc();
      require_gc_handle();
      require_image();
      require_memory_snapshot();
      require_method();
      require_object();
      require_parameter();
      require_pointer();
      require_reference();
      require_string();
      require_thread();
      require_type();
      require_type_enum();
      require_value_type();
    }
  });

  // node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/index.js
  var require_dist2 = __commonJS({
    "node_modules/.pnpm/frida-il2cpp-bridge@0.7.13/node_modules/frida-il2cpp-bridge/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      require_il2cpp();
    }
  });

  // agent/index.ts
  var import_frida_il2cpp_bridge = __toESM(require_dist2());
  function netStringArrayToStringArray(arr) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
      ret[i] = arr.get(i).content;
    }
    return ret;
  }
  function netFloatArrayToFloatArray(arr) {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
      ret[i] = arr.get(i);
    }
    return ret;
  }
  function dumpSongBase(img) {
    const songs = [];
    const SongBase = img.class("SongBase");
    console.log("obtained class SongBase");
    let instance = Il2Cpp.GC.choose(SongBase)[0];
    while (instance === void 0) {
      instance = Il2Cpp.GC.choose(SongBase)[0];
    }
    console.log("obtained instance");
    const songList = instance.method("get_AllSongs").invoke();
    const count = songList.method("get_Count").invoke();
    console.log(`count: ${count}`);
    for (let i = 0; i < count; i++) {
      const song = songList.method("get_Item").invoke(i);
      songs[i] = {};
      ["composer", "illustrator", "songsId", "songsKey", "songsName"].forEach((item) => {
        songs[i][item] = song.field(item).value.content;
      });
      ["charter", "levels"].forEach((item) => {
        let val = song.field(item).value;
        songs[i][item] = netStringArrayToStringArray(val);
      });
      songs[i]["difficulty"] = netFloatArrayToFloatArray(song.field("difficulty").value).map((it) => Number(it.toFixed(1)));
    }
    const file = new File("/storage/emulated/0/Documents/songs.json", "w");
    file.write(JSON.stringify(songs, null, 4));
    file.flush();
    file.close();
    console.log("Written to /storage/emulated/0/Documents/songs.json");
  }
  Il2Cpp.perform(() => {
    Reflect.defineProperty(Il2Cpp, "unityVersion", { value: "2019.4.31f1c1" });
    const img = Il2Cpp.Domain.assembly("Assembly-CSharp").image;
    console.log("got img");
    dumpSongBase(img);
  });
})();
