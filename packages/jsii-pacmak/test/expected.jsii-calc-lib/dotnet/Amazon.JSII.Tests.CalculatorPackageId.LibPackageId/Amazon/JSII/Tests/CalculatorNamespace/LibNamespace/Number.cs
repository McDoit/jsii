using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.LibNamespace
{
    [JsiiClass(typeof(Number), "@scope/jsii-calc-lib.Number", "[{\"name\":\"value\",\"type\":{\"primitive\":\"number\"}}]")]
    public class Number : Value_, IIDoublable
    {
        public Number(double value): base(new DeputyProps(new object[]{value}))
        {
        }

        protected Number(ByRefValue reference): base(reference)
        {
        }

        protected Number(DeputyProps props): base(props)
        {
        }

        [JsiiProperty("doubleValue", "{\"primitive\":\"number\"}")]
        public virtual double DoubleValue
        {
            get => GetInstanceProperty<double>();
        }

        [JsiiProperty("value", "{\"primitive\":\"number\"}")]
        public override double Value
        {
            get => GetInstanceProperty<double>();
        }
    }
}