```
apan@apan-mn1 test-hftnb-embroider-2 % yarn test:ember
yarn run v1.22.10
$ ember test
Building into /private/var/folders/zx/zln4zlz96812ljx8xn1yg0c4001prb/T/embroider/cddef3
Environment: test
cleaning up...
Built project successfully. Stored in "/var/folders/zx/zln4zlz96812ljx8xn1yg0c4001prb/T/tests-dist-2022318-99721-tm6meo.l8azm".
ok 1 Chrome 100.0 - [77 ms] - Integration | Component | foo-bar: it renders
ok 2 Chrome 100.0 - [50 ms] - Integration | Component | lorem: it renders
not ok 3 Chrome 100.0 - [43 ms] - Integration | Component | components/demo-component: it tests
    ---
        stack: >
            Error: Assertion Failed: Attempting to inject an unknown injection: 'service:test-hftnb-embroider-2@my-service'
                at assert (http://localhost:7357/assets/vendor.js:42976:15)
                at Registry.proto.validateInjections (http://localhost:7357/assets/vendor.js:8941:62)
                at FactoryManager.create (http://localhost:7357/assets/vendor.js:8381:35)
                at Proxy.create (http://localhost:7357/assets/vendor.js:8106:20)
                at CurlyComponentManager.create (http://localhost:7357/assets/vendor.js:14316:31)
                at Object.evaluate (http://localhost:7357/assets/vendor.js:57289:25)
                at AppendOpcodes.evaluate (http://localhost:7357/assets/vendor.js:55594:19)
                at LowLevelVM.evaluateSyscall (http://localhost:7357/assets/vendor.js:59095:22)
                at LowLevelVM.evaluateInner (http://localhost:7357/assets/vendor.js:59051:14)
                at LowLevelVM.evaluateOuter (http://localhost:7357/assets/vendor.js:59043:14)
        message: >
            global failure: Error: Assertion Failed: Attempting to inject an unknown injection: 'service:test-hftnb-embroider-2@my-service'
        negative: >
            false
        browser log: |
            {"type":"error","text":"\n\nError occurred:\n\n- While rendering:\n  -top-level\n    application\n      index\n        demo-component\n\n"}
            {"type":"error","text":"\n\nError occurred:\n\n\n\n"}
    ...
ok 4 Chrome 100.0 - [0 ms] - ember-qunit: Ember.onerror validation: Ember.onerror is functioning properly

1..4
# tests 4
# pass  3
# skip  0
# todo  0
# fail  1
```
