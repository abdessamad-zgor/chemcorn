import {writable} from "svelte/store"
import {ProduitSchema, ItemSchema, type Item} from "$lib/types"

type CartState = {
	items: Item[]
	total: number
}

export function calculateTotal(items: Item[]){
	return items.reduce((acc, cur)=>acc+cur.prix*cur.prix, 0);
}

let cartStore = writable<CartState>({items: [], total: 0});

export function addItem(p: Item){
	cartStore.update(s=>{
		let item = s.items.find(i=>i.id=p.id)
		if(!item)
			return {
				items: [...s.items, p], 
				total: calculateTotal([...s.items, p])
			}
		return s
	})
}

export function setQuantity(p: Item, amount: number){
	cartStore.update(s=>{
		let item = s.items.find(i=>i.id=p.id)
		if(item && item.quantite+amount>0){
			let newItems = [
					...s.items.filter(v=>v.id!=p.id), 
					{...item, quantity: item.quantite+amount }
				]
			return { 
				items: newItems,
				total: calculateTotal(newItems)
			}
		} else {
			return s
		}
	})
}

export function removeItem(p: Item) {
	cartStore.update(s=>(
		{
			items: [...s.items.filter(v=>v.id==p.id)],
			total: calculateTotal(s.items.filter(v=>v.id==p.id))
		}
	));
}
