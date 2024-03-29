
namespace Reflex.Core
{
	/** */
	export abstract class Meta
	{
		constructor(readonly locator: Locator)
		{
			
		}
	}
	
	/** */
	export abstract class LeafMeta extends Meta
	{
		constructor(locator?: Locator)
		{
			super(locator || new Locator(LocatorType.leaf));
		}
	}
	
	/**
	 * Stores information about a raw string or number that
	 * will be applied to some branch.
	 */
	export class ValueMeta extends LeafMeta
	{
		constructor(readonly value: string | number | bigint) { super(); }
	}
	
	/** */
	export class ClosureMeta extends LeafMeta
	{
		constructor(readonly closure: Function)
		{
			super();
		}
	}
	
	/**
	 * Stores the information about a single attribute.
	 * Although attributes can come in a large object literal
	 * that specifies many attributes together, the primitive
	 * translator function splits them up into smaller metas,
	 * which is done because some values may be static,
	 * and others may be behind a reflex.
	 */
	export class AttributeMeta extends LeafMeta
	{
		constructor(
			readonly key: string,
			readonly value: any)
		{
			super();
		}
	}
	
	/** */
	export abstract class ContainerMeta extends Meta { }
	
	/**
	 * 
	 */
	export abstract class StreamMeta extends ContainerMeta
	{
		constructor(
			readonly containerMeta: ContainerMeta,
			locator?: Locator)
		{
			super(locator || new Locator(LocatorType.stream));
		}
	}
}
