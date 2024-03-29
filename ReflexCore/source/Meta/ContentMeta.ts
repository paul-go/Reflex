
namespace Reflex.Core
{
	/** */
	export class ContentMeta extends LeafMeta
	{
		/**
		 * Returns the ContentMeta object that corresponds
		 * to the specified content object.
		 */
		static of(content: IContent)
		{
			return this.metas.get(content) || null;
		}
		
		/** */
		private static metas = new WeakMap<IContent, ContentMeta>();
		
		/** */
		constructor(
			readonly value: IContent,
			locator?: Locator)
		{
			super(locator);
			ContentMeta.metas.set(value, this);
		}
		
		/**
		 * An arbitrary unique value used to identify an index in an effect array
		 * that was responsible for rendering this BranchMeta.
		 */
		key = 0;
	}
}
