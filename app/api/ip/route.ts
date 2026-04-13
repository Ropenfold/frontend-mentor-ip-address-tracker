export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const ip = searchParams.get("ip") || "";

    const result = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IP_GEOLOCATION_API_KEY}&ipAddress=${ip}`)
        .then((res) => res.json())
        .catch((err) => {
            console.error("Error fetching geolocation data:", err);
            return { error: "Failed to fetch geolocation data" };
        });

    return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
    });
}   
