# Traffic lights

- The time of a complete rotation should be 20 seconds
- The time of red and green should be equal. (8 sec for red and green)

```
      case 'green':
        return {
          color: 'yellow',
          text: 'The light is yellow.',
          background: '#FFF2C5',
          border: '#FFCD1B',
          fontColor: '#8E7004',
          timeout: 4000,
        };
      case 'yellow':
        return {
          color: 'red',
          text: 'The light is red.',
          background: '#FFD3D3',
          border: '#FF1B1B',
          fontColor: '#930101',
          timeout: 8000,
        };
      case 'red':
        return {
          color: 'green',
          text: 'The light is green.',
          background: '#DDFFE4',
          border: '#00D12E',
          fontColor: '#005012',
          timeout: 8000,
        };

      default:
        return {
          color: 'black',
          text: 'No light match',
          background: 'whitesmoke',
          border: 'black',
          fontColor: 'black',
          timeout: 0,
        };
```

- Publish your work (using netlify/heroku/github pages etc.) and send us links to both your published work and repo!

URL: https://test-whale-traffic-client-yowq.vercel.app/
