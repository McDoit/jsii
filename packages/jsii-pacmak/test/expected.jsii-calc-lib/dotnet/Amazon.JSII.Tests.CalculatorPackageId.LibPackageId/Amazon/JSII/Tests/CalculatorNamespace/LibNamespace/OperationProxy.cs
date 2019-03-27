using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiTypeProxy(typeof(Operation), "@scope/jsii-calc-lib.Operation")]
    internal sealed class OperationProxy : Operation
    {
        private OperationProxy(ByRefValue reference): base(reference)
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