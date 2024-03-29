
namespace Reflex.Core
{
	/**
	 * A class that wraps a value whose changes can be observed.
	 */
	export class StatefulReflex<T = any>
	{
		constructor(value: T)
		{
			this._value = value;
		}
		
		/** 
		 * Gets or sets the value of the effect variable.
		 */
		get value()
		{
			return this._value;
		}
		set value(value: T)
		{
			const was = this._value;
			this._value = value;
			
			if (was !== this._value)
				this.changed(value, was);
		}
		
		/** @internal */
		private _value: any;
		
		/**
		 * Sets the value of the effect variable and returns void.
		 * (Useful for effect variable arguments in arrow functions to cancel the return value.)
		 */
		set(value: T)
		{
			this.value = value;
		}
		
		/**
		 * @internal
		 * It's important that this is an assignment rather than a function,
		 * because the event needs to be on the instance rather than in the
		 * prototype so that it's caught by the event system.
		 */
		changed = reflex<(now: T, was: T) => void>();
		
		/** Returns a string representation of the value of this effect variable. */
		toString()
		{
			return "" + this._value;
		}
	}

	/**
	 * 
	 */
	export class BooleanReflex extends StatefulReflex<boolean>
	{
		/**
		 * Flips the value of the effect variable from true to false or false to true.
		 * (Useful for effect variable arguments in arrow functions to cancel the return value.)
		 */
		flip()
		{
			this.set(!this.value);
		}
	}
}
