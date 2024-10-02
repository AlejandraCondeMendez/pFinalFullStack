const Mapa =()=>{
    return(
        <div
  style={{
    textDecoration: "none",
    overflow: "hidden",
    maxWidth: "100%",
    width: 500,
    height: 500
  }}
>
  <div
    id="embed-ded-map-canvas"
    style={{ height: "100%", width: "100%", maxWidth: "100%" }}
  >
    <iframe
      style={{ height: "100%", width: "100%", border: 0 }}
      frameBorder={0}
      src="https://www.google.com/maps/embed/v1/place?q=300+metros+norte+y+50+metros+este,+Iglesia+de+Río+Oro,+De+la,+C.+Ross,+San+José,+Río+Oro&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
    />
  </div>
  <a
    className="googlecoder"
    href="https://www.bootstrapskins.com/themes"
    id="enable-map-data"
  >
    premium bootstrap themes
  </a>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "#embed-ded-map-canvas .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;"
    }}
  />
</div>

    )
}
export default Mapa 

    