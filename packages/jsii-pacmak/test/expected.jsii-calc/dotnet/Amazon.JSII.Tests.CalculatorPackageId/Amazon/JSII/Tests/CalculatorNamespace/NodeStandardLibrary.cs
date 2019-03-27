using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiClass(typeof(NodeStandardLibrary), "jsii-calc.NodeStandardLibrary", "[]")]
    public class NodeStandardLibrary : DeputyBase
    {
        public NodeStandardLibrary(): base(new DeputyProps(new object[]{}))
        {
        }

        protected NodeStandardLibrary(ByRefValue reference): base(reference)
        {
        }

        protected NodeStandardLibrary(DeputyProps props): base(props)
        {
        }

        [JsiiProperty("osPlatform", "{\"primitive\":\"string\"}")]
        public virtual string OsPlatform
        {
            get => GetInstanceProperty<string>();
        }

        [JsiiMethod("cryptoSha256", "{\"primitive\":\"string\"}", "[]")]
        public virtual string CryptoSha256()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }

        [JsiiMethod("fsReadFile", "{\"primitive\":\"string\",\"promise\":true}", "[]")]
        public virtual string FsReadFile()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }

        [JsiiMethod("fsReadFileSync", "{\"primitive\":\"string\"}", "[]")]
        public virtual string FsReadFileSync()
        {
            return InvokeInstanceMethod<string>(new object[]{});
        }
    }
}