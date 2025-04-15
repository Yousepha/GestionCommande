import { NextResponse } from "next/server";
import type { Client } from "@prisma/client";
import prisma from "@/app/lib/prisma";
import type { NextRequest } from "next/server";

export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
    const body: Client = await request.json();
    const client = await prisma.client.update({
        where:{
            idClient: Number(params.id)
        },
        data:{
            prenom: body.prenom,
            nom: body.nom,
            adresse: body.adresse,
            telephone: body.telephone,
            entreprise: body.entreprise
        }
    });
    return NextResponse.json(client, {status: 200});
}

export async function DELETE(
    request: NextRequest,
    context: { params: { id: string } }
  ) {
    const clientId = Number(context.params.id);
  
    const deletedClient = await prisma.client.delete({
      where: {
        idClient: clientId,
      },
    });
  
    return NextResponse.json(deletedClient, { status: 200 });
  }
  

// export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
//     const client = await prisma.client.delete({
//         where:{
//             idClient: Number(params.id)
//         }
//     });
//     return NextResponse.json(client, {status: 200});
// }