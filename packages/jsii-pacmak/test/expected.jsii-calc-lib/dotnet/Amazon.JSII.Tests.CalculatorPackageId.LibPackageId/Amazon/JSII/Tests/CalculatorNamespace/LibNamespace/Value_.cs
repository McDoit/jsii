using Amazon.JSII.Runtime.Deputy;
using Amazon.JSII.Tests.CalculatorNamespace.BaseNamespace;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiClass(typeof(Value_), "@scope/jsii-calc-lib.Value", "[]")]
    public abstract class Value_ : Base
    {
        protected Value_(): base(new DeputyProps(new object[]{}))
        {
        }

        protected Value_(ByRefValue reference): base(reference)
        {
        }

        protected Value_(DeputyProps props): base(props)
        {
        }

        [JsiiProperty("value", "{\"primitive\":\"number\"}")]
        public virtual double Value
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