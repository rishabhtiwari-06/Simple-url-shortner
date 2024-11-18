import clientPromise from "@/lib/mongodb"
export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    //Check If short Url exists
    const doc = await collection.findOne({
        shorturl: body.shorturl
    })
    if(doc){
        return Response.json({success:false, message: 'URL Already Exist' })
    }
    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })
    return Response.json({success:true, message: 'Finished' })
  }