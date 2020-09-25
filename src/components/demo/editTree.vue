<template>
  <div class="sortDiv">
	<!-- <div>
		<icon-svg icon-class="cascader" />
    <svg-icon icon-class="date"></svg-icon>
	</div> -->
    <el-tree :data="sortData" draggable node-key="id" ref="sortTree" default-expand-all :expand-on-click-node="false" :render-content="renderContent" :allow-drop="allowDrop">
    </el-tree>
    <el-button @click="getData">获取数据</el-button>
  </div>
</template>
<script>
//引入svg组件
//import IconSvg from '@/components/IconSvg'
export default {
  name: 'editTree',
//   components:{
//     IconSvg,
//   },
  data() {
    return {
      sortData: [
        {
          id: 1,
          label: '一级 1',
          checkItem: true,
          children: [
            {
              id: 4,
              label: '二级 1-1',
              checkItem: false
            },
            {
              id: 9,
              label: '二级 1-2',
              checkItem: false
            },
            {
              id: 10,
              label: '二级 1-3',
              checkItem: false
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          checkItem: true,
          children: [
            {
              id: 5,
              label: '二级 2-1',
              checkItem: true
            },
            {
              id: 6,
              label: '二级 2-2',
              checkItem: true
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          checkItem: true,
          children: [
            {
              id: 7,
              label: '二级 3-1',
              checkItem: true
            },
            {
              id: 8,
              label: '二级 3-2',
              checkItem: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 是否允许拖拽
    allowDrop (draggingNode, dropNode, type) {
      if (draggingNode.parent === dropNode.parent) {
        return type !== 'inner'
      }
      else return false
    },
    //获取数据
    getData () {
      let result = this.$refs['sortTree'].data;
      let sortRulesMaps = [];
      result.forEach((element, index) => {
        let item = null;
        if (element.checkItem) {
          if (element.children && element.children.length > 0) {
            item = {
              orderIndex: index,
              sortField: element.label,
              rule: ['OTHERS']
            };
            element.children.forEach(i => {
              if (i.checkItem) {
                item.rule.push(i.label);
              }
            });
            item.rule = item.rule.join('_');
          }
        }
        item && sortRulesMaps.push(item);
      });
    },
    //同级置顶功能
    toTop(node, data) {
        let c = Object.assign({}, data);
        if (node.parent.level === 0) {
          this.sortData.unshift(c)
        } else {
          node.parent.data.children.unshift(c);
        }
        this.$refs['sortTree'].remove(data.id);
    },
    changeNode(r, node, data) {
      data.checkItem = r;
    },
    // //自定义内容
    // renderContent(h, { node, data }) {
    //   return (
    //     <span class="custom-tree-node">
    //       <span>{data.label}</span>
    //       <span>
    //         <el-checkbox
    //           v-model={data.checkItem}
    //           checked={data.checkItem}
    //           on-change={r => this.changeNode(r, node, data)}
    //         />
    //         <el-button
    //           size="mini"
    //           type="text"
    //           on-click={() => this.toTop(node, data)}
    //           style="color:#707375;margin-left:10px"
    //         >
    //           <i class="fa fa-arrow-up">置顶</i>
    //         </el-button>
    //       </span>
    //     </span>
    //   );
	// },
	 // 试题名称更新
    nodeEdit(ev, store, data) {
      data.checkItem = true;
      this.$nextTick(() => {
        console.log(this.$refs.ssss);
        const $input =
          ev.target.parentNode.parentNode.querySelector("input") ||
          ev.target.parentElement.parentElement.querySelector("input");
        !$input ? "" : $input.focus();
      });
    },
    // 编辑结果确定
    edit_sure(ev, data) {
		console.log(ev.target.value,data)
		data.label = ev.target.value;
		data.checkItem = false;
    },
    // 编辑
    showOrEdit(data, node) {
      if (data.checkItem) {
        return (
          <input value={data.label} on-blur={ev => this.edit_sure(ev, data)} />
        );
      } else {
        return node.label;
      }
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node" slot-scope="{ node, data}">
          <span ref="ssss" on-dblclick={ev => this.nodeEdit(ev, store, data)}>
            <i class={data.icon} />
            {this.showOrEdit(data, node)}
          </span>
          <span>
            <el-button
              type="text"
              size="mini"
              click={() => remove(node, data)}
            >
              <i class="el-icon-delete" />
            </el-button>
            <el-button type="text" size="mini" on-click={ev => this.append(data)} >
              <i class="el-icon-plus" />
            </el-button>
          </span>
        </span>
      );
	},
	 //添加下级区域
    append(data) {
      console.log(data);
    },
	
  }
};
</script>
<style>

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.sortDiv{
  height: 200px;
}
</style>