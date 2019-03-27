using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(EraseUndefinedHashValues), "jsii-calc.EraseUndefinedHashValues", "[]")]
    public class EraseUndefinedHashValues : DeputyBase
    {
        public EraseUndefinedHashValues(): base(new DeputyProps(new object[]{}))
        {
        }

        protected EraseUndefinedHashValues(ByRefValue reference): base(reference)
        {
        }

        protected EraseUndefinedHashValues(DeputyProps props): base(props)
        {
        }

        [JsiiMethod("doesKeyExist", "{\"primitive\":\"boolean\"}", "[{\"name\":\"opts\",\"type\":{\"fqn\":\"jsii-calc.EraseUndefinedHashValuesOptions\"}},{\"name\":\"key\",\"type\":{\"primitive\":\"string\"}}]")]
        public static bool DoesKeyExist(IEraseUndefinedHashValuesOptions opts, string key)
        {
            return InvokeStaticMethod<bool>(typeof(EraseUndefinedHashValues), new object[]{opts, key});
        }

        [JsiiMethod("prop1IsNull", "{\"primitive\":\"any\"}", "[]")]
        public static object Prop1IsNull()
        {
            return InvokeStaticMethod<object>(typeof(EraseUndefinedHashValues), new object[]{});
        }

        [JsiiMethod("prop2IsUndefined", "{\"primitive\":\"any\"}", "[]")]
        public static object Prop2IsUndefined()
        {
            return InvokeStaticMethod<object>(typeof(EraseUndefinedHashValues), new object[]{});
        }
    }
}