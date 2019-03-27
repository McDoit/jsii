using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiTypeProxy(typeof(Value_), "@scope/jsii-calc-lib.Value")]
    internal sealed class ValueProxy : Value_
    {
        private ValueProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiProperty("value", "{\"primitive\":\"number\"}")]
        public override double Value
        {
            get => GetInstanceProperty<double>();
        }
    }
}