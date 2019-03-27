using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(UnaryOperation), "jsii-calc.UnaryOperation")]
    internal sealed class UnaryOperationProxy : UnaryOperation
    {
        private UnaryOperationProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiProperty("value", "{\"primitive\":\"number\"}")]
        public override double Value
        {
            get => GetInstanceProperty<double>();
        }

        [JsiiMethod("toString", "{\"primitive\":\"string\"}", "[]")]
        public override string ToString()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }
    }
}