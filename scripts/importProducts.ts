import { client } from '../src/sanity/lib/client';
import fetch from 'node-fetch';

export async function uploadImageFromUrl(imageUrl: string) {
    const response = await fetch(imageUrl);

    if (!response.ok) {
        throw new Error(`Failed to fetch image from ${imageUrl}`);
    }

    const buffer = await response.buffer();

    const asset = await client.assets.upload('image', buffer, {
        filename: imageUrl.split('/').pop(),
        contentType: response.headers.get('content-type') || undefined,
    });

    console.log('Uploaded asset:', asset);  // Add this to check if the asset is successfully uploaded

    return asset;
}

