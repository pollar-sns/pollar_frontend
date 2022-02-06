export default function TrendingPollsCarousel() {
  return (
    <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
      <div style={MyCarousel.CARD_STYLE}>First Card</div>
      <div style={MyCarousel.CARD_STYLE}>Second Card</div>
      <div style={MyCarousel.CARD_STYLE}>Third Card</div>
      <div style={MyCarousel.CARD_STYLE}>Fourth Card</div>
      <div style={MyCarousel.CARD_STYLE}>Fifth Card</div>
    </ReactCardCarousel>
  );
}
