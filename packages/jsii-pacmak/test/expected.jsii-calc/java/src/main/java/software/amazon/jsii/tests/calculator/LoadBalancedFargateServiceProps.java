package software.amazon.jsii.tests.calculator;

@javax.annotation.Generated(value = "jsii-pacmak")
public interface LoadBalancedFargateServiceProps extends software.amazon.jsii.JsiiSerializable {
    java.lang.Number getContainerPort();
    java.lang.String getCpu();
    java.lang.String getMemoryMiB();
    java.lang.Boolean getPublicLoadBalancer();
    java.lang.Boolean getPublicTasks();

    /**
     * @return a {@link Builder} of {@link LoadBalancedFargateServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }

    /**
     * A builder for {@link LoadBalancedFargateServiceProps}
     */
    final class Builder {
        @javax.annotation.Nullable
        private java.lang.Number _containerPort;
        @javax.annotation.Nullable
        private java.lang.String _cpu;
        @javax.annotation.Nullable
        private java.lang.String _memoryMiB;
        @javax.annotation.Nullable
        private java.lang.Boolean _publicLoadBalancer;
        @javax.annotation.Nullable
        private java.lang.Boolean _publicTasks;

        /**
         * Sets the value of ContainerPort
         * @param value the value to be set
         * @return {@code this}
         */
        public Builder withContainerPort(@javax.annotation.Nullable final java.lang.Number value) {
            this._containerPort = value;
            return this;
        }
        /**
         * Sets the value of Cpu
         * @param value the value to be set
         * @return {@code this}
         */
        public Builder withCpu(@javax.annotation.Nullable final java.lang.String value) {
            this._cpu = value;
            return this;
        }
        /**
         * Sets the value of MemoryMiB
         * @param value the value to be set
         * @return {@code this}
         */
        public Builder withMemoryMiB(@javax.annotation.Nullable final java.lang.String value) {
            this._memoryMiB = value;
            return this;
        }
        /**
         * Sets the value of PublicLoadBalancer
         * @param value the value to be set
         * @return {@code this}
         */
        public Builder withPublicLoadBalancer(@javax.annotation.Nullable final java.lang.Boolean value) {
            this._publicLoadBalancer = value;
            return this;
        }
        /**
         * Sets the value of PublicTasks
         * @param value the value to be set
         * @return {@code this}
         */
        public Builder withPublicTasks(@javax.annotation.Nullable final java.lang.Boolean value) {
            this._publicTasks = value;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LoadBalancedFargateServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        public LoadBalancedFargateServiceProps build() {
            return new LoadBalancedFargateServiceProps() {
                @javax.annotation.Nullable
                private final java.lang.Number $containerPort = _containerPort;
                @javax.annotation.Nullable
                private final java.lang.String $cpu = _cpu;
                @javax.annotation.Nullable
                private final java.lang.String $memoryMiB = _memoryMiB;
                @javax.annotation.Nullable
                private final java.lang.Boolean $publicLoadBalancer = _publicLoadBalancer;
                @javax.annotation.Nullable
                private final java.lang.Boolean $publicTasks = _publicTasks;

                @Override
                public java.lang.Number getContainerPort() {
                    return this.$containerPort;
                }

                @Override
                public java.lang.String getCpu() {
                    return this.$cpu;
                }

                @Override
                public java.lang.String getMemoryMiB() {
                    return this.$memoryMiB;
                }

                @Override
                public java.lang.Boolean getPublicLoadBalancer() {
                    return this.$publicLoadBalancer;
                }

                @Override
                public java.lang.Boolean getPublicTasks() {
                    return this.$publicTasks;
                }

                public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                    com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                    com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                    obj.set("containerPort", om.valueToTree(this.getContainerPort()));
                    obj.set("cpu", om.valueToTree(this.getCpu()));
                    obj.set("memoryMiB", om.valueToTree(this.getMemoryMiB()));
                    obj.set("publicLoadBalancer", om.valueToTree(this.getPublicLoadBalancer()));
                    obj.set("publicTasks", om.valueToTree(this.getPublicTasks()));
                    return obj;
                }

            };
        }
    }

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    final static class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements software.amazon.jsii.tests.calculator.LoadBalancedFargateServiceProps {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObject.InitializationMode mode) {
            super(mode);
        }

        @Override
        @javax.annotation.Nullable
        public java.lang.Number getContainerPort() {
            return this.jsiiGet("containerPort", java.lang.Number.class);
        }

        @Override
        @javax.annotation.Nullable
        public java.lang.String getCpu() {
            return this.jsiiGet("cpu", java.lang.String.class);
        }

        @Override
        @javax.annotation.Nullable
        public java.lang.String getMemoryMiB() {
            return this.jsiiGet("memoryMiB", java.lang.String.class);
        }

        @Override
        @javax.annotation.Nullable
        public java.lang.Boolean getPublicLoadBalancer() {
            return this.jsiiGet("publicLoadBalancer", java.lang.Boolean.class);
        }

        @Override
        @javax.annotation.Nullable
        public java.lang.Boolean getPublicTasks() {
            return this.jsiiGet("publicTasks", java.lang.Boolean.class);
        }
    }
}
