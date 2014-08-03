﻿namespace Navigation.Test
{
	public class CustomState : FluentState
	{
		public CustomState(string handler) 
			: base("")
		{
			AddAttribute("handler", handler);
		}
	}
}
