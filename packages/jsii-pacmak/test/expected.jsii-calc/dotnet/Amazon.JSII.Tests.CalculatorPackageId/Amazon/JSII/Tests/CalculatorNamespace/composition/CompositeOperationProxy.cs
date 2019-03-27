using Amazon.JSII.Runtime.Deputy;
using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

namespace Amazon.JSII.Tests.CalculatorNamespace.composition
{
    [JsiiTypeProxy(typeof(CompositeOperation_), "jsii-calc.composition.CompositeOperation")]
    internal sealed class CompositeOperationProxy : CompositeOperation_
    {
        private CompositeOperationProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiProperty("expression", "{\"fqn\":\"@scope/jsii-calc-lib.Value\"}")]
        public override Value_ Expression
        {
            get => GetInstanceProperty<Value_>();
        }
    }
}