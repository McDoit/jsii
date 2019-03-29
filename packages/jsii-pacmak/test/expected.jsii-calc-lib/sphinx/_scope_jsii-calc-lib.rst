@scope/jsii-calc-lib
====================

Reference
---------

.. tabs::

   .. group-tab:: C#

      View in `Nuget <https://www.nuget.org/packages/Amazon.JSII.Tests.CalculatorPackageId.LibPackageId/0.8.2>`_

      **csproj**:

      .. code-block:: xml

         <PackageReference Include="Amazon.JSII.Tests.CalculatorPackageId.LibPackageId" Version="0.8.2" />

      **dotnet**:

      .. code-block:: console

         dotnet add package Amazon.JSII.Tests.CalculatorPackageId.LibPackageId --version 0.8.2

      **packages.config**:

      .. code-block:: xml

         <package id="Amazon.JSII.Tests.CalculatorPackageId.LibPackageId" version="0.8.2" />


   .. group-tab:: Java

      View in `Maven Central <https://repo1.maven.org/maven2/software/amazon/jsii/tests/calculator-lib/0.8.2/>`_

      **Apache Buildr**:

      .. code-block:: none

         'software.amazon.jsii.tests:calculator-lib:jar:0.8.2'

      **Apache Ivy**:

      .. code-block:: xml

         <dependency groupId="software.amazon.jsii.tests" name="calculator-lib" rev="0.8.2"/>

      **Apache Maven**:

      .. code-block:: xml

         <dependency>
           <groupId>software.amazon.jsii.tests</groupId>
           <artifactId>calculator-lib</artifactId>
           <version>0.8.2</version>
         </dependency>

      **Gradle / Grails**:

      .. code-block:: none

         compile 'software.amazon.jsii.tests:calculator-lib:0.8.2'

      **Groovy Grape**:

      .. code-block:: none

         @Grapes(
         @Grab(group='software.amazon.jsii.tests', module='calculator-lib', version='0.8.2')
         )


   .. group-tab:: JavaScript

      View in `NPM <https://www.npmjs.com/package/@scope/jsii-calc-lib/v/0.8.2>`_

      **npm**:

      .. code-block:: console

         $ npm i @scope/jsii-calc-lib@0.8.2

      **package.json**:

      .. code-block:: js

         {
           "@scope/jsii-calc-lib": "^0.8.2"
         }

      **yarn**:

      .. code-block:: console

         $ yarn add @scope/jsii-calc-lib@0.8.2


   .. group-tab:: TypeScript

      View in `NPM <https://www.npmjs.com/package/@scope/jsii-calc-lib/v/0.8.2>`_

      **npm**:

      .. code-block:: console

         $ npm i @scope/jsii-calc-lib@0.8.2

      **package.json**:

      .. code-block:: js

         {
           "@scope/jsii-calc-lib": "^0.8.2"
         }

      **yarn**:

      .. code-block:: console

         $ yarn add @scope/jsii-calc-lib@0.8.2



.. py:module:: @scope/jsii-calc-lib

EnumFromScopedModule (enum)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: EnumFromScopedModule

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.lib.EnumFromScopedModule;

      .. code-tab:: javascript

         const { EnumFromScopedModule } = require('@scope/jsii-calc-lib');

      .. code-tab:: typescript

         import { EnumFromScopedModule } from '@scope/jsii-calc-lib';



   .. py:data:: Value1

   .. py:data:: Value2


IDoublable (interface)
^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IDoublable

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.lib.IDoublable;

      .. code-tab:: javascript

         // IDoublable is an interface

      .. code-tab:: typescript

         import { IDoublable } from '@scope/jsii-calc-lib';





   .. py:attribute:: doubleValue

      :type: number *(readonly)*


IFriendly (interface)
^^^^^^^^^^^^^^^^^^^^^

.. py:class:: IFriendly

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.lib.IFriendly;

      .. code-tab:: javascript

         // IFriendly is an interface

      .. code-tab:: typescript

         import { IFriendly } from '@scope/jsii-calc-lib';





   .. py:method:: hello() -> string

      :rtype: string
      :abstract: Yes


MyFirstStruct (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: MyFirstStruct

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.lib.MyFirstStruct;

      .. code-tab:: javascript

         // MyFirstStruct is an interface

      .. code-tab:: typescript

         import { MyFirstStruct } from '@scope/jsii-calc-lib';





   .. py:attribute:: anumber

      :type: number *(readonly)*


   .. py:attribute:: astring

      :type: string *(readonly)*


   .. py:attribute:: firstOptional

      :type: string[] *(optional)* *(readonly)*


Number
^^^^^^

.. py:class:: Number(value)

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.lib.Number;

      .. code-tab:: javascript

         const { Number } = require('@scope/jsii-calc-lib');

      .. code-tab:: typescript

         import { Number } from '@scope/jsii-calc-lib';



   :extends: :py:class:`~@scope/jsii-calc-lib.Value`\ 
   :implements: :py:class:`~@scope/jsii-calc-lib.IDoublable`\ 
   :param value: 
   :type value: number

   .. py:attribute:: doubleValue

      *Implements* :py:meth:`@scope/jsii-calc-lib.IDoublable.doubleValue`

      :type: number *(readonly)*


   .. py:attribute:: value

      *Implements* :py:meth:`@scope/jsii-calc-lib.Value.value`

      :type: number *(readonly)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:method:: toString() -> string

      *Inherited from* :py:meth:`@scope/jsii-calc-lib.Value <@scope/jsii-calc-lib.Value.toString>`

      :rtype: string


Operation
^^^^^^^^^

.. py:class:: Operation()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.lib.Operation;

      .. code-tab:: javascript

         const { Operation } = require('@scope/jsii-calc-lib');

      .. code-tab:: typescript

         import { Operation } from '@scope/jsii-calc-lib';



   :extends: :py:class:`~@scope/jsii-calc-lib.Value`\ 
   :abstract: Yes

   .. py:method:: toString() -> string

      *Overrides* :py:meth:`@scope/jsii-calc-lib.Value.toString`

      :rtype: string
      :abstract: Yes


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


   .. py:attribute:: value

      *Inherited from* :py:attr:`@scope/jsii-calc-lib.Value <@scope/jsii-calc-lib.Value.value>`

      :type: number *(readonly)* *(abstract)*


StructWithOnlyOptionals (interface)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. py:class:: StructWithOnlyOptionals

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.lib.StructWithOnlyOptionals;

      .. code-tab:: javascript

         // StructWithOnlyOptionals is an interface

      .. code-tab:: typescript

         import { StructWithOnlyOptionals } from '@scope/jsii-calc-lib';





   .. py:attribute:: optional1

      :type: string *(optional)* *(readonly)*


   .. py:attribute:: optional2

      :type: number *(optional)* *(readonly)*


   .. py:attribute:: optional3

      :type: boolean *(optional)* *(readonly)*


Value
^^^^^

.. py:class:: Value()

   **Language-specific names:**

   .. tabs::

      .. code-tab:: c#

         using Amazon.JSII.Tests.CalculatorNamespace.LibNamespace;

      .. code-tab:: java

         import software.amazon.jsii.tests.calculator.lib.Value;

      .. code-tab:: javascript

         const { Value } = require('@scope/jsii-calc-lib');

      .. code-tab:: typescript

         import { Value } from '@scope/jsii-calc-lib';



   :extends: :py:class:`@scope/jsii-calc-base.Base`\ 
   :abstract: Yes

   .. py:method:: toString() -> string

      :rtype: string


   .. py:attribute:: value

      :type: number *(readonly)* *(abstract)*


   .. py:method:: typeName() -> any

      *Inherited from* :py:meth:`@scope/jsii-calc-base.Base <@scope/jsii-calc-base.Base.typeName>`

      :rtype: any


