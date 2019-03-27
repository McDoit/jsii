using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(IIInterfaceThatShouldNotBeADataType), "jsii-calc.IInterfaceThatShouldNotBeADataType")]
    internal sealed class IInterfaceThatShouldNotBeADataTypeProxy : DeputyBase, IIInterfaceThatShouldNotBeADataType
    {
        private IInterfaceThatShouldNotBeADataTypeProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiProperty("otherValue", "{\"primitive\":\"string\"}")]
        public string OtherValue
        {
            get => GetInstanceProperty<string>();
        }

        [JsiiProperty("value", "{\"primitive\":\"string\"}")]
        public string Value
        {
            get => GetInstanceProperty<string>();
        }

        [JsiiMethod("doThings", null, "[]")]
        public void DoThings()
        {
            InvokeInstanceVoidMethod(new object[]{});
        }
    }
}