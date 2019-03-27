using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(BinaryOperation), "jsii-calc.BinaryOperation")]
    internal sealed class BinaryOperationProxy : BinaryOperation
    {
        private BinaryOperationProxy(ByRefValue reference): base(reference)
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