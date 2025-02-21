:: BASE_DOC ::

## API
### Form Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
colon | Boolean | false | 是否在表单标签字段右侧显示冒号 | N
labelAlign | String | right | 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。可选项：left/right/top | N
labelWidth | String / Number | '100px' | 可以整体设置label标签宽度，默认为100px | N
layout | String | vertical | 表单布局，有两种方式：纵向布局 和 行内布局。可选项：vertical/inline | N
preventSubmitDefault | Boolean | true | 是否阻止表单提交默认事件，即提交后会刷新页面 | N
requiredMark | Boolean | undefined | 是否显示必填符号，默认显示 | N
resetType | String | empty | 重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值。可选项：empty/initial | N
rules | Object | - | 表单字段校验规则。TS 类型：`{ [field in keyof FormData]: Array<FormRule> }` | N
scrollToFirstError | String | - | 表单校验不通过时，是否自动滚动到第一个校验不通过的字段，平滑滚动或是瞬间直达。值为空则表示不滚动。可选项：smooth/auto | N
showErrorMessage | Boolean | true | 校验不通过时，是否显示错误提示信息 | N
size | String | medium | 表单尺寸。可选项：medium/large | N
statusIcon | TNode | undefined | 校验状态图标。TS 类型：`boolean | TNode<TdFormItemProps>`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
onReset | Function |  | TS 类型：`(context: { e?: FormResetEvent }) => void`<br/>表单重置时触发 | N
onSubmit | Function |  | TS 类型：`(context: SubmitContext<FormData>) => void`<br/>表单提交时触发。其中 context.validateResult 表示校验结果，context .firstError 表示校验不通过的第一个规则提醒。context.validateResult 值为 true 表示校验通过；如果校验不通过，context.validateResult 值为校验结果列表。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts)。<br/>`interface SubmitContext<T extends Data = Data> { e?: FormSubmitEvent; validateResult: FormValidateResult<T>; firstError?: string }`<br/><br/>`type FormValidateResult<T> = boolean | ValidateResultObj<T>`<br/><br/>`type ValidateResultObj<T> = { [key in keyof T]: boolean | ValidateResultList }`<br/><br/>`type ValidateResultList = Array<AllValidateResult>`<br/><br/>`type AllValidateResult = CustomValidateObj | ValidateResultType`<br/><br/>`interface ValidateResultType extends FormRule { result: boolean }`<br/><br/>`type ValidateResult<T> = { [key in keyof T]: boolean | ErrorList }`<br/><br/>`type ErrorList = Array<FormRule>`<br/> | N
onValuesChange | Function |  | TS 类型：`(changedValues: Record<string, unknown>, allValues: Record<string, unknown>) => void`<br/>字段值更新时触发的回调事件 | N

### FormItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
for | String | - | label 原生属性 | N
help | String | - | 表单项说明内容 | N
initialData | String / Boolean | - | 表单初始数据，重置时所需初始数据 | N
label | TNode | '' | 字段标签名称。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
labelAlign | String | - | 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。默认使用 Form 的对齐方式，优先级高于 Form.labelAlign。可选项：left/right/top | N
labelWidth | String / Number | - | 可以整体设置标签宽度，优先级高于 Form.labelWidth | N
name | String | - | 表单字段名称 | N
requiredMark | Boolean | undefined | 是否显示必填符号，优先级高于 Form.requiredMark | N
rules | Array | [] | 表单字段校验规则。TS 类型：`Array<FormRule>` | N
statusIcon | TNode | undefined | 校验状态图标。优先级高级 Form 的 statusIcon。TS 类型：`boolean | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
successBorder | Boolean | false | 是否显示校验成功的边框，默认不显示 | N

### FormRule

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
boolean | Boolean | - | 内置校验方法，校验值类型是否为布尔类型，示例：`{ boolean: true, message: '数据类型必须是布尔类型' }` | N
date | Boolean / Object | - | 内置校验方法，校验值是否为日期格式，[参数文档](https://github.com/validatorjs/validator.js)，示例：`{ date: { delimiters: '-' }, message: '日期分隔线必须是短横线（-）' }`。TS 类型：`boolean | IsDateOptions`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | N
email | Boolean / Object | - | 内置校验方法，校验值是否为邮件格式，[参数文档](https://github.com/validatorjs/validator.js)，示例：`{ email: { ignore_max_length: true }, message: '请输入正确的邮箱地址' }`。TS 类型：`boolean | IsEmailOptions`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | N
enum | Array | - | 内置校验方法，校验值是否属于枚举值中的值。示例：`{ enum: ['primary', 'info', 'warning'], message: '值只能是 primary/info/warning 中的一种' }`。TS 类型：`Array<string>` | N
idcard | Boolean | - | 内置校验方法，校验值是否为身份证号码，组件校验正则为 `/^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i`，示例：`{ idcard: true, message: '请输入正确的身份证号码' }` | N
len | Number / Boolean | - | 内置校验方法，校验值固定长度，如：len: 10 表示值的字符长度只能等于 10 ，中文表示 2 个字符，英文为 1 个字符。示例：`{ len: 10, message: '内容长度不对' }`。<br />如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length === 10, message: '内容文本长度只能是 10 个字' }` | N
max | Number / Boolean | - | 内置校验方法，校验值最大长度，如：max: 100 表示值最多不能超过 100 个字符，中文表示 2 个字符，英文为 1 个字符。示例：`{ max: 10, message: '内容超出' }`。<br />如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length <= 10, message: '内容文本长度不能超过 10 个字' }`<br />如果数据类型数字（Number），则自动变为数字大小的比对 | N
message | String | - | 校验未通过时呈现的错误信息，值为空则不显示 | N
min | Number / Boolean | - | 内置校验方法，校验值最小长度，如：min: 10 表示值最多不能少于 10 个字符，中文表示 2 个字符，英文为 1 个字符。示例：`{ min: 10, message: '内容长度不够' }`。<br />如果希望字母和中文都是同样的长度，示例：`{ validator: (val) => val.length >= 10, message: '内容文本长度至少为 10 个字' }`。<br />如果数据类型数字（Number），则自动变为数字大小的比对 | N
number | Boolean | - | 内置校验方法，校验值是否为数字（1.2 、 1e5  都算数字），示例：`{ number: true, message: '请输入数字' }` | N
pattern | Object | - | 内置校验方法，校验值是否符合正则表达式匹配结果，示例：`{ pattern: /@qq.com/, message: '请输入 QQ 邮箱' }`。TS 类型：`RegExp` | N
required | Boolean | - | 内置校验方法，校验值是否已经填写。该值为 true，默认显示必填标记，可通过设置 `requiredMark: false` 隐藏必填标记 | N
telnumber | Boolean | - | 内置校验方法，校验值是否为手机号码，校验正则为 `/^1[3-9]\d{9}$/`，示例：`{ telnumber: true, message: '请输入正确的手机号码' }` | N
trigger | String | change | 校验触发方式。可选项：change/blur | N
type | String | error | 校验未通过时呈现的错误信息类型，有 告警信息提示 和 错误信息提示 等两种。可选项：error/warning | N
url | Boolean / Object | - | 内置校验方法，校验值是否为网络链接地址，[参数文档](https://github.com/validatorjs/validator.js)，示例：`{ url: { protocols: ['http','https','ftp'] }, message: '请输入正确的 Url 地址' }`。TS 类型：`boolean | IsURLOptions`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | N
validator | Function | - | 自定义校验规则。TS 类型：`CustomValidator`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | N

### FormInstance

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
getAllFieldsValue | Function | - | 必需。获取全部表单数据。TS 类型：`() => Record<string, unknown>` | Y
getFieldValue | Function | - | 必需。获取单个字段值。TS 类型：`(field: string) => unknown` | Y
reset | Function | - | 必需。重置表单，与点击 reset 按钮效果相同。TS 类型：`(e?: FormEvent<HTMLFormElement>) => void` | Y
setFields | Function | - | 必需。设置多组字段状态。TS 类型：`(fields: FieldData[]) => void`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | Y
setFieldsValue | Function | - | 必需。设置表单字段值。TS 类型：`(field: FieldOption) => void`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | Y
submit | Function | - | 必需。提交表单，与点击 submit 按钮效果相同。TS 类型：`(e?: FormEvent<HTMLFormElement>) => void` | Y
validate | Function | - | 必需。校验。TS 类型：`() => Promise<Result>`。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/form/type.ts) | Y
