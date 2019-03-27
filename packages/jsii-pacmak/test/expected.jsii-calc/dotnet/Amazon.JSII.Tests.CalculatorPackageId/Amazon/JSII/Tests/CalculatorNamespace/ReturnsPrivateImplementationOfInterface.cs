using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(ReturnsPrivateImplementationOfInterface), "jsii-calc.ReturnsPrivateImplementationOfInterface", "[]")]
    public class ReturnsPrivateImplementationOfInterface : DeputyBase
    {
        public ReturnsPrivateImplementationOfInterface(): base(new DeputyProps(new object[]{}))
        {
        }

        protected ReturnsPrivateImplementationOfInterface(ByRefValue reference): base(reference)
        {
        }

        protected ReturnsPrivateImplementationOfInterface(DeputyProps props): base(props)
        {
        }

        [JsiiProperty("privateImplementation", "{\"fqn\":\"jsii-calc.IPrivatelyImplemented\"}")]
        public virtual IIPrivatelyImplemented PrivateImplementation
        {
            get => GetInstanceProperty<IIPrivatelyImplemented>();
        }
    }
}