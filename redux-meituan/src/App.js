import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Cart from './components/Cart';
import FoodsCategory from './components/FoodsCategory';

import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setFoodsList } from './store/modules/takeaway';

// 本地模拟数据
const mockFoodsList = [
  {
    tag: '318569657',
    name: '一人套餐',
    foods: [
      {
        id: 8078956697,
        name: '烤羊肉串(10串)',
        like_ratio_desc: '好评度100%',
        month_saled: 40,
        unit: '10串',
        food_tag_list: ['点评网友推荐'],
        price: 90,
        picture: 'https://picsum.photos/150/150?random=1',
        description: '',
        tag: '318569657'
      },
      {
        id: 7384994864,
        name: '腊味煲仔饭',
        like_ratio_desc: '好评度81%',
        month_saled: 100,
        unit: '1人份',
        food_tag_list: [],
        price: 39,
        picture: 'https://picsum.photos/150/150?random=2',
        description: '',
        tag: '318569657'
      },
      {
        id: 2305772036,
        name: '鸡腿胡萝卜焖饭',
        like_ratio_desc: '好评度91%',
        month_saled: 300,
        unit: '1人份',
        food_tag_list: [],
        price: 34.32,
        picture: 'https://picsum.photos/150/150?random=3',
        description: '主料：大米、鸡腿、菜心、胡萝卜',
        tag: '318569657'
      },
      {
        id: 2233861812,
        name: '小份酸汤莜面鱼鱼+肉夹馍套餐',
        like_ratio_desc: '好评度73%',
        month_saled: 600,
        unit: '1人份',
        food_tag_list: ['“口味好,包装很好～点赞”'],
        price: 34.32,
        picture: 'https://picsum.photos/150/150?random=4',
        description: '酸汤莜面鱼鱼，主料：酸汤、莜面 肉夹馍，主料：白皮饼、猪肉',
        tag: '318569657'
      }
    ]
  },
  {
    tag: '318569658',
    name: '小吃',
    foods: [
      {
        id: 8078956698,
        name: '烤鸡翅(5个)',
        like_ratio_desc: '好评度95%',
        month_saled: 80,
        unit: '5个',
        food_tag_list: [],
        price: 45,
        picture: 'https://picsum.photos/150/150?random=5',
        description: '',
        tag: '318569658'
      },
      {
        id: 7384994865,
        name: '薯条',
        like_ratio_desc: '好评度88%',
        month_saled: 120,
        unit: '中份',
        food_tag_list: [],
        price: 18,
        picture: 'https://picsum.photos/150/150?random=6',
        description: '',
        tag: '318569658'
      }
    ]
  },
  {
    tag: '318569659',
    name: '饮品',
    foods: [
      {
        id: 8078956699,
        name: '可乐',
        like_ratio_desc: '好评度90%',
        month_saled: 200,
        unit: '500ml',
        food_tag_list: [],
        price: 8,
        picture: 'https://picsum.photos/150/150?random=7',
        description: '',
        tag: '318569659'
      },
      {
        id: 7384994866,
        name: '橙汁',
        like_ratio_desc: '好评度92%',
        month_saled: 150,
        unit: '400ml',
        food_tag_list: ['鲜榨'],
        price: 15,
        picture: 'https://picsum.photos/150/150?random=8',
        description: '鲜榨橙汁',
        tag: '318569659'
      }
    ]
  }
];

const App = () => {
  const { foodsList, activeIndex } = useSelector((state) => state.foods);
  const dispatch = useDispatch();

  useEffect(() => {
    // 使用本地模拟数据替代后端请求
    dispatch(setFoodsList(mockFoodsList));
  }, [dispatch]);
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.map((item, index) => {
                return (
                  activeIndex === index && (
                    <FoodsCategory
                      key={item.tag}
                      // 列表标题
                      name={item.name}
                      // 列表商品
                      foods={item.foods}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  );
};

export default App;
