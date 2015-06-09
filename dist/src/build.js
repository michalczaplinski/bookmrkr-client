(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/czapla/testing/react-test/src/js/app.js":[function(require,module,exports){
$(document).ready(function() {

  // $('a.item').on("click", function(e) {
  //   e.preventDefault();
  //   $('.item').removeClass('active');
  //   $(this).addClass('active');
  // });
  $('.right.menu.open').on("click",function(e){
        e.preventDefault();
    $('.ui.vertical.menu').toggle();
  });

  $('.ui.dropdown').dropdown();

});

// var React = require('react')

// var Timer = React.createClass({
//   getInitialState: function() {
//     return {secondsElapsed: 0};
//   },
//   tick: function() {
//     this.setState({secondsElapsed: this.state.secondsElapsed + 1});
//   },
//   componentDidMount: function() {
//     this.interval = setInterval(this.tick, 1000);
//   },
//   componentWillUnmount: function() {
//     clearInterval(this.interval);
//   },
//   render: function() {
//     return (
//       <div className="well">
//         Seconds Elapsed: {this.state.secondsElapsed}
//       </div>
//     );
//   }
// });

// React.render(<Timer />, document.getElementById('content'));


// var Item = React.createClass({
//   render: function() {
//     return (
//       <div className="item">
//         <div className="ui input">
//             <input type="text" placeholder="Search..." />
//         </div>
//       </div>
//       );
//   }
// });

// React.render(<Item />, document.getElementById('content'));


// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <p>
//         Hello, <input type="text" placeholder="Your name here" />!
//         It is {this.props.date.toTimeString()}
//       </p>
//     );
//   }
// });

// setInterval(function() {
//   React.render(
//     <HelloWorld date={new Date()} />,
//     document.getElementById('example')
//   );
// }, 500);

},{}]},{},["/Users/czapla/testing/react-test/src/js/app.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY3phcGxhL3Rlc3RpbmcvcmVhY3QtdGVzdC9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsR0FBRyxDQUFDLENBQUM7O0FBRUwsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7O0FBRS9CLENBQUMsQ0FBQyxDQUFDOztBQUVILCtCQUErQjs7QUFFL0Isa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEMsT0FBTztBQUNQLHVCQUF1QjtBQUN2QixzRUFBc0U7QUFDdEUsT0FBTztBQUNQLG9DQUFvQztBQUNwQyxvREFBb0Q7QUFDcEQsT0FBTztBQUNQLHVDQUF1QztBQUN2QyxvQ0FBb0M7QUFDcEMsT0FBTztBQUNQLHlCQUF5QjtBQUN6QixlQUFlO0FBQ2YsK0JBQStCO0FBQy9CLHVEQUF1RDtBQUN2RCxlQUFlO0FBQ2YsU0FBUztBQUNULE1BQU07QUFDTixNQUFNOztBQUVOLCtEQUErRDtBQUMvRDs7QUFFQSxpQ0FBaUM7QUFDakMseUJBQXlCO0FBQ3pCLGVBQWU7QUFDZiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLDREQUE0RDtBQUM1RCxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLFdBQVc7QUFDWCxNQUFNO0FBQ04sTUFBTTs7QUFFTiw4REFBOEQ7QUFDOUQ7O0FBRUEsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUN6QixlQUFlO0FBQ2YsWUFBWTtBQUNaLHFFQUFxRTtBQUNyRSxpREFBaUQ7QUFDakQsYUFBYTtBQUNiLFNBQVM7QUFDVCxNQUFNO0FBQ04sTUFBTTs7QUFFTiwyQkFBMkI7QUFDM0Isa0JBQWtCO0FBQ2xCLHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFDekMsT0FBTztBQUNQLFdBQVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgLy8gJCgnYS5pdGVtJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICQoJy5pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAvLyAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAvLyB9KTtcbiAgJCgnLnJpZ2h0Lm1lbnUub3BlbicpLm9uKFwiY2xpY2tcIixmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy51aS52ZXJ0aWNhbC5tZW51JykudG9nZ2xlKCk7XG4gIH0pO1xuXG4gICQoJy51aS5kcm9wZG93bicpLmRyb3Bkb3duKCk7XG5cbn0pO1xuXG4vLyB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG5cbi8vIHZhciBUaW1lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbi8vICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbi8vICAgICByZXR1cm4ge3NlY29uZHNFbGFwc2VkOiAwfTtcbi8vICAgfSxcbi8vICAgdGljazogZnVuY3Rpb24oKSB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7c2Vjb25kc0VsYXBzZWQ6IHRoaXMuc3RhdGUuc2Vjb25kc0VsYXBzZWQgKyAxfSk7XG4vLyAgIH0sXG4vLyAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbi8vICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLCAxMDAwKTtcbi8vICAgfSxcbi8vICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4vLyAgIH0sXG4vLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiPlxuLy8gICAgICAgICBTZWNvbmRzIEVsYXBzZWQ6IHt0aGlzLnN0YXRlLnNlY29uZHNFbGFwc2VkfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIFJlYWN0LnJlbmRlcig8VGltZXIgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xuXG5cbi8vIHZhciBJdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuLy8gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBpbnB1dFwiPlxuLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgKTtcbi8vICAgfVxuLy8gfSk7XG5cbi8vIFJlYWN0LnJlbmRlcig8SXRlbSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSk7XG5cblxuLy8gdmFyIEhlbGxvV29ybGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4vLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxwPlxuLy8gICAgICAgICBIZWxsbywgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWUgaGVyZVwiIC8+IVxuLy8gICAgICAgICBJdCBpcyB7dGhpcy5wcm9wcy5kYXRlLnRvVGltZVN0cmluZygpfVxuLy8gICAgICAgPC9wPlxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH0pO1xuXG4vLyBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbi8vICAgUmVhY3QucmVuZGVyKFxuLy8gICAgIDxIZWxsb1dvcmxkIGRhdGU9e25ldyBEYXRlKCl9IC8+LFxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbi8vICAgKTtcbi8vIH0sIDUwMCk7XG4iXX0=
