using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(DocumentedClass), "jsii-calc.DocumentedClass", "[]")]
    public class DocumentedClass : DeputyBase
    {
        public DocumentedClass(): base(new DeputyProps(new object[]{}))
        {
        }

        protected DocumentedClass(ByRefValue reference): base(reference)
        {
        }

        protected DocumentedClass(DeputyProps props): base(props)
        {
        }

        [JsiiMethod("greet", "{\"primitive\":\"number\"}", "[{\"name\":\"greetee\",\"type\":{\"fqn\":\"jsii-calc.Greetee\",\"optional\":true}}]")]
        public virtual double Greet(IGreetee greetee)
        {
            return InvokeInstanceMethod<double>(new object[]{greetee});
        }
    }
}