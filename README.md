```
$ ember b --environment test

Building into /private/var/folders/rj/swxy20tx7gx45_mmdxhdx80c000vbq/T/embroider/72ccc5
Environment: test
⠇ building... [@embroider/webpack]assets by chunk 640 KiB (id hint: vendors)
  asset chunk.952b5c45014cea2d5253.js 580 KiB [emitted] [immutable] [big] (id hint: vendors)
  asset chunk.a946c09be6f023797849.js 60.2 KiB [emitted] [immutable] (id hint: vendors)
asset chunk.36103af21939696d2b1e.js 34.9 KiB [emitted] [immutable] (name: assets/test.js)
asset chunk.a313cbe39e682ad36e3f.js 23 KiB [emitted] [immutable] (name: assets/dummy.js)
Entrypoint assets/dummy.js 83.2 KiB = chunk.a946c09be6f023797849.js 60.2 KiB chunk.a313cbe39e682ad36e3f.js 23 KiB
Entrypoint assets/test.js [big] 675 KiB = chunk.a946c09be6f023797849.js 60.2 KiB chunk.952b5c45014cea2d5253.js 580 KiB chunk.36103af21939696d2b1e.js 34.9 KiB
runtime modules 6.74 KiB 13 modules
modules by path ../../node_modules/ 258 KiB 78 modules
modules by path ./ 8.3 KiB 11 modules
modules by path ../../../ 243 KiB
  modules by path ../../../../../../../../../../Users/ypiao/ui/tests/test-hftnb-embroider/node_modules/@babel/runtime/helpers/esm/*.js 1.63 KiB 4 modules
  ../../../../../../../../../../Users/ypiao/ui/tests/test-hftnb-embroider/node_modules/qunit/qunit/qunit.js 242 KiB [built] [code generated]
  ../../../externals/require.js 108 bytes [built] [code generated]
modules by path ../../components/ 612 bytes
  modules by path ../../components/*.js 346 bytes 2 modules
  modules by path ../../components/*.hbs 266 bytes
    ../../components/foo-bar.hbs 1 bytes [built] [code generated] [1 error]
    ../../components/lorem.hbs 265 bytes [built] [code generated]

ERROR in ../../components/foo-bar.hbs
Module Error (from ../../../../../../../../../../Users/ypiao/ui/tests/test-hftnb-embroider/node_modules/thread-loader/dist/cjs.js):
unable to resolve package test-hftnb-embroider from $TMPDIR/embroider/72ccc5
Thread Loader (Worker 1)
unable to resolve package test-hftnb-embroider from $TMPDIR/embroider/72ccc5

    at PackageCache.resolve (/Users/ypiao/ui/tests/test-hftnb-embroider/node_modules/@embroider/shared-internals/src/package-cache.js:29:21)
    at CompatResolver.tryComponent (/Users/ypiao/ui/tests/test-hftnb-embroider/node_modules/@embroider/compat/src/resolver.js:411:77)
    at CompatResolver.resolveElement (/Users/ypiao/ui/tests/test-hftnb-embroider/node_modules/@embroider/compat/src/resolver.js:576:26)
    at enter (/Users/ypiao/ui/tests/test-hftnb-embroider/node_modules/@embroider/compat/src/resolver-transform.js:141:57)
    at visitNode ($TMPDIR/embroider/72ccc5/node_modules/ember-source/vendor/ember/ember-template-compiler.js:11763:16)
    at visitArray ($TMPDIR/embroider/72ccc5/node_modules/ember-source/vendor/ember/ember-template-compiler.js:11855:20)
    at visitKey ($TMPDIR/embroider/72ccc5/node_modules/ember-source/vendor/ember/ember-template-compiler.js:11831:7)
    at visitNode ($TMPDIR/embroider/72ccc5/node_modules/ember-source/vendor/ember/ember-template-compiler.js:11785:9)
    at traverse ($TMPDIR/embroider/72ccc5/node_modules/ember-source/vendor/ember/ember-template-compiler.js:11896:5)
    at preprocess ($TMPDIR/embroider/72ccc5/node_modules/ember-source/vendor/ember/ember-template-compiler.js:13445:9)
 @ ../../components/foo-bar.js 2:0-37 3:36-44
 @ ./tests/integration/components/foo-bar-test.js 1:0-54 3:9-11
 @ ./assets/test.js 4:9-67

webpack 5.65.0 compiled with 1 error in 7009 ms
```
