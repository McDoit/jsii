using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace.BaseNamespace
{
    [JsiiClass(typeof(Base), "@scope/jsii-calc-base.Base", "[]")]
    public abstract class Base : DeputyBase
    {
        protected Base(): base(new DeputyProps(new object[]{}))
        {
        }

        protected Base(ByRefValue reference): base(reference)
        {
        }

        protected Base(DeputyProps props): base(props)
        {
        }

        [JsiiMethod("typeName", "{\"primitive\":\"any\"}", "[]")]
        public virtual object TypeName()
        {
            return InvokeInstanceMethod<object>(new object[]{});
        }
    }
}