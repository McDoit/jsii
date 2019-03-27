using Amazon.JSII.Runtime.Deputy;

namespace Amazon.JSII.Tests.CalculatorNamespace
{
    [JsiiTypeProxy(typeof(ILoadBalancedFargateServiceProps), "jsii-calc.LoadBalancedFargateServiceProps")]
    internal sealed class LoadBalancedFargateServicePropsProxy : DeputyBase, ILoadBalancedFargateServiceProps
    {
        private LoadBalancedFargateServicePropsProxy(ByRefValue reference): base(reference)
        {
        }

        [JsiiProperty("containerPort", "{\"primitive\":\"number\",\"optional\":true}")]
        public double? ContainerPort
        {
            get => GetInstanceProperty<double? >();
        }

        [JsiiProperty("cpu", "{\"primitive\":\"string\",\"optional\":true}")]
        public string Cpu
        {
            get => GetInstanceProperty<string>();
        }

        [JsiiProperty("memoryMiB", "{\"primitive\":\"string\",\"optional\":true}")]
        public string MemoryMiB
        {
            get => GetInstanceProperty<string>();
        }

        [JsiiProperty("publicLoadBalancer", "{\"primitive\":\"boolean\",\"optional\":true}")]
        public bool? PublicLoadBalancer
        {
            get => GetInstanceProperty<bool? >();
        }

        [JsiiProperty("publicTasks", "{\"primitive\":\"boolean\",\"optional\":true}")]
        public bool? PublicTasks
        {
            get => GetInstanceProperty<bool? >();
        }
    }
}