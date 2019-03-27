using Amazon.JSII.Runtime.Deputy;
using Amazon.JSII.Tests.CalculatorNamespace.composition;
using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(Power), "jsii-calc.Power", "[{\"name\":\"base\",\"type\":{\"fqn\":\"@scope/jsii-calc-lib.Value\"}},{\"name\":\"pow\",\"type\":{\"fqn\":\"@scope/jsii-calc-lib.Value\"}}]")]
    public class Power : CompositeOperation_
    {
        public Power(Value_ @base, Value_ pow): base(new DeputyProps(new object[]{@base, pow}))
        {
        }

        protected Power(ByRefValue reference): base(reference)
        {
        }

        protected Power(DeputyProps props): base(props)
        {
        }

        [JsiiProperty("base", "{\"fqn\":\"@scope/jsii-calc-lib.Value\"}")]
        public virtual Value_ Base
        {
            get => GetInstanceProperty<Value_>();
        }

        [JsiiProperty("expression", "{\"fqn\":\"@scope/jsii-calc-lib.Value\"}")]
        public override Value_ Expression
        {
            get => GetInstanceProperty<Value_>();
        }

        [JsiiProperty("pow", "{\"fqn\":\"@scope/jsii-calc-lib.Value\"}")]
        public virtual Value_ Pow
        {
            get => GetInstanceProperty<Value_>();
        }
    }
}