;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1215: function (module, exports, __webpack_require__) {
      var map = {
        './components/dropdown/dropdown.stories.tsx': 1216,
        './components/input-range/input-range.stories.tsx': 1219,
        './components/toggle/toggle.stories.tsx': 1222,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1215)
    },
    1216: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
            ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(399)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'UI|Dropdown',
            module
          ).add(
            'Period dropdown',
            function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { width: '218px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    labelName: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'labelNanme',
                      'Срок'
                    ),
                  }
                )
              )
            },
            {
              info: { inline: !0 },
              text:
                '\n\n  ### Notes\n\n  Simple example component\n\n  ### Usage\n  ~~~js\n  <Dropdown\n    text="Срок"\n  />\n  ~~~\n\n',
            }
          )
        }.call(this, __webpack_require__(140)(module))
    },
    1217: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(170),
        content = __webpack_require__(1218)
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    1218: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(171)(!1)).push([
        module.i,
        '.dd {\n  position: relative;\n  padding: 5px;\n  border-bottom: solid 2px var(--color-ghost);\n}\n  .dd .dd-arrow {\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n  }\n  .dd-open .dd-arrow {\n      border-bottom: 6px solid var(--color-black);\n    }\n  .dd-close .dd-arrow {\n      border-top: 6px solid var(--color-black);\n    }\n  .ds {\n  padding-top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n  .dl {\n  position: absolute;\n  top: calc(100% + 1px);\n  width: calc(100%);\n  left: 0;\n  height: auto;\n  background-color: var(--color-white);\n  box-shadow: 0px 2px 4px var(--color-shadow);\n  z-index: 1;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  overflow: hidden;\n}\n  .di {\n  font-size: var(--f-size-big);\n  margin-left: -5px;\n  margin-right: -5px;\n  padding: 5px;\n  cursor: pointer;\n}\n  .di:not(.ds) {\n    padding: 10px;\n  }\n  .di:not(.ds):hover {\n      color: var(--color-white);\n      background: var(--color-violet);\n    }\n  /* #arrows-examples div {\n  margin: 0 0 15px 0;\n} */\n  /* .arrow-down {\n\n} */\n',
        '',
      ]),
        (module.exports = exports)
    },
    1219: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
            ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(400)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'UI|Input-Range',
            module
          ).add(
            'Currency range',
            function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { width: '218px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    value: '10000',
                    step: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'step',
                      '1000'
                    ),
                    max: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'max',
                      '10000000'
                    ),
                    min: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'min',
                      '10000'
                    ),
                    originCurrency: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text
                    )('originCurrency', '₽'),
                    labelName: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'labelName',
                      'Инвестирование'
                    ),
                  }
                )
              )
            },
            {
              info: { inline: !0 },
              text:
                '\n\n  ### Notes\n\n  Simple example component\n\n  ### Usage\n  ~~~js\n  <ExampleComponent\n    text="Some text"\n  />\n  ~~~\n\n',
            }
          )
        }.call(this, __webpack_require__(140)(module))
    },
    1220: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(170),
        content = __webpack_require__(1221)
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    1221: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(171)(!1)).push([
        module.i,
        '::-moz-range-track {\n  background: var(--color-ghost);\n  height: 2px;\n  width: 100%;\n}\n::-ms-track {\n  background: var(--color-ghost);\n  height: 2px;\n  width: 100%;\n}\n::-webkit-slider-runnable-track {\n  background: var(--color-ghost);\n  height: 2px;\n  width: 100%;\n}\n::-moz-range-thumb {\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: var(--color-white);\n  box-shadow: 0px 2px 4px var(--color-shadow);\n  width: 23px;\n  height: 23px;\n}\n::-ms-thumb {\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: var(--color-white);\n  box-shadow: 0px 2px 4px var(--color-shadow);\n  width: 23px;\n  height: 23px;\n}\n::-webkit-slider-thumb {\n  border-radius: 50%;\n  border: none;\n  cursor: pointer;\n  background: var(--color-white);\n  box-shadow: 0px 2px 4px var(--color-shadow);\n  width: 23px;\n  height: 23px;\n}\n::-moz-range-thumb:active {\n    background: var(--color-violet);\n  }\n::-ms-thumb:active {\n    background: var(--color-violet);\n  }\n::-webkit-slider-thumb:active {\n    background: var(--color-violet);\n  }\n\n  ::-moz-range-thumb:hover {\n    background: var(--color-violet);\n  }\n\n  ::-ms-thumb:hover {\n    background: var(--color-violet);\n  }\n\n  ::-webkit-slider-thumb:hover {\n    background: var(--color-violet);\n  }\np {\n  font-size: var(--f-size-big);\n  margin: 5px;\n  text-align: left;\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    1222: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40),
            ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('UI|Toggle', module).add(
            'Simple toggle',
            function () {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { width: '218px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ___WEBPACK_IMPORTED_MODULE_3__.a,
                  {
                    toggleId: '1',
                    toggleVal: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)(
                      'on',
                      !1
                    ),
                    labelText: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)(
                      'labelText',
                      'налоговый вычет (ИИС)'
                    ),
                    labelState: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)(
                      'labelState',
                      { on: 'Включен', off: 'Выключен' },
                      Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)('on', !1)
                        ? 'Выключен'
                        : 'Включен'
                    ),
                  }
                )
              )
            },
            {
              info: { inline: !0 },
              text:
                '\n\n  ### Notes\n\n  Simple example component\n\n  ### Usage\n  ~~~js\n  <ExampleComponent\n    text="Some text"\n  />\n  ~~~\n\n',
            }
          )
        }.call(this, __webpack_require__(140)(module))
    },
    1223: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(170),
        content = __webpack_require__(1224)
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    1224: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(171)(!1)).push([
        module.i,
        "input[type='checkbox'] {\n  display: none;\n}\n  input[type='checkbox']:checked + label .toggle {\n        background: var(--color-smoke);\n      }\n  input[type='checkbox']:checked + label .toggle:after {\n          right: 1px;\n          left: auto;\n        }\n  label {\n  display: flex;\n  align-items: center;\n}\n  label span {\n    font-weight: 600;\n  }\n  label p {\n    margin: 0;\n    font-size: var(--f-size-small);\n    text-align: right;\n  }\n  .toggle {\n  min-width: 52px;\n  height: 28px;\n  background: var(--color-violet);\n  border-radius: 15px;\n  position: relative;\n}\n  .toggle:after {\n    content: '';\n    position: absolute;\n    width: 26px;\n    height: 26px;\n    border-radius: 100%;\n    background: var(--color-white);\n    top: 1px;\n    left: 1px;\n    right: auto;\n    cursor: pointer;\n  }\n",
        '',
      ]),
        (module.exports = exports)
    },
    384: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return GlobalStyle
      })
      var templateObject_1,
        _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43),
        __makeTemplateObject = function (cooked, raw) {
          return (
            Object.defineProperty
              ? Object.defineProperty(cooked, 'raw', { value: raw })
              : (cooked.raw = raw),
            cooked
          )
        },
        GlobalStyle = function () {
          return Object(
            _emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx
          )(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.Global, {
            styles: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__.css)(
              templateObject_1 ||
                (templateObject_1 = __makeTemplateObject(
                  [
                    "\n      #story-root {\n        padding: 0 40px;\n      }\n      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');\n      * {\n        font-family: 'Roboto', sans-serif;\n      }\n      .arrow-down {\n        width: 0px;\n        height: 0px;\n        border-left: 20px solid transparent;\n        border-right: 20px solid transparent;\n        border-top: 20px solid #030303;\n      }\n      .select-label {\n        font-size: 17px;\n        color: #a8a8a8;\n        margin-bottom: 10px;\n        font-weight: 400;\n      }\n      :root {\n        --color-black: #030303;\n        --color-gray: #4e4e4e;\n        --color-smoke: #a8a8a8;\n        --color-smoke: #a8a8a8;\n        --color-ghost: #dddddd;\n        --color-pink: #f5d9db;\n        --color-pastel: #f9eff0;\n        --color-violet: #6f62b1;\n        --color-green: #5a9650;\n        --color-white: #fff;\n        --color-shadow: #00000029;\n        --f-size-large: 36px;\n        --f-size-big: 24px;\n        --f-size-middle: 17px;\n        --f-size-small: 14px;\n      }\n    ",
                  ],
                  [
                    "\n      #story-root {\n        padding: 0 40px;\n      }\n      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');\n      * {\n        font-family: 'Roboto', sans-serif;\n      }\n      .arrow-down {\n        width: 0px;\n        height: 0px;\n        border-left: 20px solid transparent;\n        border-right: 20px solid transparent;\n        border-top: 20px solid #030303;\n      }\n      .select-label {\n        font-size: 17px;\n        color: #a8a8a8;\n        margin-bottom: 10px;\n        font-weight: 400;\n      }\n      :root {\n        --color-black: #030303;\n        --color-gray: #4e4e4e;\n        --color-smoke: #a8a8a8;\n        --color-smoke: #a8a8a8;\n        --color-ghost: #dddddd;\n        --color-pink: #f5d9db;\n        --color-pastel: #f9eff0;\n        --color-violet: #6f62b1;\n        --color-green: #5a9650;\n        --color-white: #fff;\n        --color-shadow: #00000029;\n        --f-size-large: 36px;\n        --f-size-big: 24px;\n        --f-size-middle: 17px;\n        --f-size-small: 14px;\n      }\n    ",
                  ]
                ))
            ),
          })
        }
    },
    399: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return components_dropdown_dropdown
      })
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        period_select = [
          { id: 0, title: '3 месяца', selected: !0 },
          { id: 1, title: '6 месяцев', selected: !1 },
          { id: 2, title: '12 месяцев', selected: !1 },
        ],
        __assign =
          (__webpack_require__(1217),
          function () {
            return (__assign =
              Object.assign ||
              function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++)
                  for (var p in (s = arguments[i]))
                    Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p])
                return t
              }).apply(this, arguments)
          }),
        Dropdown = function (_a) {
          var labelName = _a.labelName,
            _b = Object(react.useState)([]),
            periodFetch = _b[0],
            setFetch = _b[1],
            _c = Object(react.useState)(null),
            periodItem = _c[0],
            setItem = _c[1],
            _d = Object(react.useState)([]),
            periodList = _d[0],
            setList = _d[1],
            _e = Object(react.useState)(!1),
            open = _e[0],
            setOpen = _e[1],
            updateDropdown = function () {
              var list = periodFetch.filter(function (item) {
                if (!item.selected) return item
                setItem(item)
              })
              setList(list)
            },
            ulRef = Object(react.useRef)(null),
            handleClickOutside = function () {
              var target = !!event && event.target
              if (null !== ulRef.current && target) {
                if (ulRef.current.contains(target)) return
                setOpen(!1)
              }
            },
            handleSelect = function (_a) {
              var id = _a.target.id
              setOpen(!open),
                setFetch(
                  periodFetch.map(function (item) {
                    return item.id.toString() === id
                      ? __assign(__assign({}, item), { selected: !0 })
                      : __assign(__assign({}, item), { selected: !1 })
                  })
                ),
                updateDropdown()
            }
          Object(react.useEffect)(
            function () {
              setFetch(period_select)
            },
            [period_select]
          ),
            Object(react.useEffect)(
              function () {
                updateDropdown()
              },
              [periodFetch]
            ),
            Object(react.useEffect)(
              function () {
                open
                  ? document.addEventListener('mousedown', handleClickOutside, !0)
                  : document.removeEventListener('mousedown', handleClickOutside),
                  document.removeEventListener('mousedown', handleClickOutside)
              },
              [open]
            )
          var list = periodList.map(function (period) {
            return react_default.a.createElement(
              'div',
              { className: 'di', key: period.id, onClick: handleSelect, id: period.id.toString() },
              period.title
            )
          })
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'div',
              { className: 'dd ' + (open ? 'dd-open' : 'dd-close'), ref: ulRef },
              react_default.a.createElement('div', { className: 'select-label' }, labelName),
              periodItem &&
                react_default.a.createElement(
                  'div',
                  { className: 'di ds', onClick: handleSelect, id: periodItem.id.toString() },
                  periodItem.title,
                  react_default.a.createElement('div', { className: 'dd-arrow' })
                ),
              open && react_default.a.createElement('div', { className: 'dl' }, list)
            )
          )
        }
      Dropdown.defaultProps = { labelName: 'Срок' }
      var components_dropdown_dropdown = Dropdown
      try {
        ;(dropdown.displayName = 'dropdown'),
          (dropdown.__docgenInfo = {
            description: '',
            displayName: 'dropdown',
            props: {
              labelName: {
                defaultValue: { value: 'Срок' },
                description: '',
                name: 'labelName',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/dropdown/dropdown.tsx#dropdown'] = {
              docgenInfo: dropdown.__docgenInfo,
              name: 'dropdown',
              path: 'src/components/dropdown/dropdown.tsx#dropdown',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    400: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return input_range_input_range
      })
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        InputRange =
          (__webpack_require__(1220),
          function (_a) {
            var step = _a.step,
              min = _a.min,
              max = _a.max,
              originCurrency = _a.originCurrency,
              labelName = _a.labelName,
              _b = Object(react.useState)(min),
              value = _b[0],
              setValue = _b[1]
            return react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement('div', { className: 'select-label' }, labelName),
              react_default.a.createElement(
                'p',
                null,
                value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
                ' ',
                originCurrency
              ),
              react_default.a.createElement('input', {
                type: 'range',
                value: value,
                onChange: function (_a) {
                  var target = _a.target
                  setValue(target.value)
                },
                step: step,
                max: max,
                min: min,
              })
            )
          })
      InputRange.defaultProps = {
        step: '1000',
        min: '10000',
        max: '10000000',
        originCurrency: '₽',
        labelName: 'Инвестирование',
      }
      var input_range_input_range = InputRange
      try {
        ;(inputrange.displayName = 'inputrange'),
          (inputrange.__docgenInfo = {
            description: '',
            displayName: 'inputrange',
            props: {
              step: {
                defaultValue: { value: '1000' },
                description: '',
                name: 'step',
                required: !1,
                type: { name: 'string' },
              },
              min: {
                defaultValue: { value: '10000' },
                description: '',
                name: 'min',
                required: !1,
                type: { name: 'string' },
              },
              max: {
                defaultValue: { value: '10000000' },
                description: '',
                name: 'max',
                required: !1,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !0,
                type: { name: 'string' },
              },
              originCurrency: {
                defaultValue: { value: '₽' },
                description: '',
                name: 'originCurrency',
                required: !1,
                type: { name: 'string' },
              },
              labelName: {
                defaultValue: { value: 'Инвестирование' },
                description: '',
                name: 'labelName',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/input-range/input-range.tsx#inputrange'] = {
              docgenInfo: inputrange.__docgenInfo,
              name: 'inputrange',
              path: 'src/components/input-range/input-range.tsx#inputrange',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    401: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return components_toggle_toggle
      })
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Toggle =
          (__webpack_require__(1223),
          function (_a) {
            var toggleVal = _a.toggleVal,
              toggleId = _a.toggleId,
              labelText = _a.labelText,
              labelState = _a.labelState,
              _b = Object(react.useState)(toggleVal),
              value = _b[0],
              setValue = _b[1]
            return react_default.a.createElement(
              react_default.a.Fragment,
              null,
              react_default.a.createElement('input', {
                type: 'checkbox',
                name: '',
                checked: value,
                id: toggleId,
                onChange: function (_a) {
                  var target = _a.target
                  console.log(target.checked), setValue(target.checked)
                },
              }),
              react_default.a.createElement(
                'label',
                { htmlFor: toggleId },
                react_default.a.createElement('div', { className: 'toggle' }),
                react_default.a.createElement(
                  'p',
                  null,
                  react_default.a.createElement(
                    'span',
                    null,
                    value ? labelState.on : labelState.off,
                    ' '
                  ),
                  labelText
                )
              )
            )
          })
      Toggle.defaultProps = {
        toggleVal: !1,
        toggleId: '1',
        labelText: 'налоговый вычет (ИИС)',
        labelState: { on: 'Включен', off: 'Выключе' },
      }
      var components_toggle_toggle = Toggle
      try {
        ;(toggle.displayName = 'toggle'),
          (toggle.__docgenInfo = {
            description: '',
            displayName: 'toggle',
            props: {
              toggleVal: {
                defaultValue: { value: !1 },
                description: '',
                name: 'toggleVal',
                required: !1,
                type: { name: 'boolean' },
              },
              toggleId: {
                defaultValue: { value: '1' },
                description: '',
                name: 'toggleId',
                required: !1,
                type: { name: 'string' },
              },
              labelText: {
                defaultValue: { value: 'налоговый вычет (ИИС)' },
                description: '',
                name: 'labelText',
                required: !1,
                type: { name: 'string' },
              },
              labelState: {
                defaultValue: { value: "{\n    on: 'Включен',\n    off: 'Выключе',\n  }" },
                description: '',
                name: 'labelState',
                required: !1,
                type: { name: '{ on: string; off: string; }' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/toggle/toggle.tsx#toggle'] = {
              docgenInfo: toggle.__docgenInfo,
              name: 'toggle',
              path: 'src/components/toggle/toggle.tsx#toggle',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    402: function (module, exports, __webpack_require__) {
      __webpack_require__(403),
        __webpack_require__(546),
        (module.exports = __webpack_require__(547))
    },
    465: function (module, exports) {},
    547: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function (module) {
          var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
            _src_shared_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(384),
            _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54),
            _storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(385),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40),
            req = __webpack_require__(1215)
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(
            _storybook_addon_info__WEBPACK_IMPORTED_MODULE_4__.withInfo
          ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.withKnobs
            )
          var withGlobal = Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.makeDecorator)({
            name: 'withGlobalStyle',
            parameterName: '',
            wrapper: function (getStory, context) {
              return react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  _src_shared_global__WEBPACK_IMPORTED_MODULE_2__.a,
                  null
                ),
                getStory(context)
              )
            },
          })
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addDecorator)(withGlobal),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.configure)(function loadStories() {
              req.keys().forEach(req)
            }, module)
        }.call(this, __webpack_require__(140)(module))
    },
    724: function (module, exports, __webpack_require__) {
      var map = { './nestedObjectAssign': 348, './nestedObjectAssign.js': 348 }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 724)
    },
  },
  [[402, 1, 2]],
])
//# sourceMappingURL=main.f0f6c6b33e0239b7272b.bundle.js.map
