using Amazon.JSII.Runtime.Deputy;
using Amazon.JSII.Tests.CalculatorNamespace.composition;
using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(Sum), "jsii-calc.Sum", "[]")]
    public class Sum : CompositeOperation_
    {
        public Sum(): base(new DeputyProps(new object[]{}))
        {
        }

        protected Sum(ByRefValue reference): base(reference)
        {
        }

        protected Sum(DeputyProps props): base(props)
        {
        }

        [JsiiProperty("expression", "{\"fqn\":\"@scope/jsii-calc-lib.Value\"}")]
        public override Value_ Expression
        {
            get => GetInstanceProperty<Value_>();
        }

        [JsiiProperty("parts", "{\"collection\":{\"kind\":\"array\",\"elementtype\":{\"fqn\":\"@scope/jsii-calc-lib.Value\"}}}")]
        public virtual Value_[] Parts
        {
            get => GetInstanceProperty<Value_[]>();
            set => SetInstanceProperty(value);
        }
    }
}