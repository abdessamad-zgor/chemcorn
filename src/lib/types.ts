import {z} from "zod"

export const Zproduit = z.object({
    slug: z.string(),
    type: z.enum(["actif", "emulsifiant", "multi-fontions", "conservateur", "texture"]),
    titre: z.string(),
    variants: z.object({images: z.string().array(), prix: z.number(), volume: z.string()}).array(),
    details: z.object({
        proprietes: z.string().array(),
        utilisations: z.object({
            categorie: z.enum(["cheveaux", "peau", "cosmitique", "detergent"]),
            use: z.string().or(z.string().array())
        }).array(),
        enPratique: z.object({
            nom_INCI : z.string(),
            origin: z.string().optional(),
            dosage:  z.object({}).catchall(z.string()),
            solubilite: z.enum(["eau", "huile", "emulsion"]).array()
        }),
        description: z.string()
    })
})

export type Produit = z.infer<typeof Zproduit>

export const Zitem = z.object({
    titre: z.string(),
    volume: z.string(),
    prix: z.number(),
    image: z.string(),
    quantite: z.number(),
    type: z.string()
})

export type Item = z.infer<typeof Zitem>

export const Zprofile = z.object({
    uid: z.string(),
    addresse: z.object({
        city: z.string(),
        street: z.string(),
        postal_code: z.number(),
    }),
    wishlist: Zitem.array(),
    recettes: z.null(),
    name: z.string(),
    phone: z.string()
})

export type Profile = z.infer<typeof Zprofile>

export const Zcommand = z.object({
    date_de_command: z.date(),
    status: z.enum(["livrée", "retard", "confirmé", "en-route", "non-confirmé"]),
    cart: Zitem.array(),
    totale: z.number(),
    uid: z.string().optional(),
    cid: z.string().optional()
})

export type Command = z.infer<typeof Zcommand>

